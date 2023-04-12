import FormData from "isomorphic-form-data";
const fs = require("fs");

async function authorizeSmartling() {
  const authenticationEndpoint =
    "https://api.smartling.com/auth-api/v2/authenticate";
  const headers = {
    "Content-Type": "application/json",
  };
  const data = {
    userIdentifier: process.env.NEXT_SMARTLING_USER_IDENTIFIER,
    userSecret: process.env.NEXT_SMARTLING_USER_SECRET,
  };

  try {
    const response = await fetch(authenticationEndpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });
    const json = await response.json();
    const accessToken = json.response.data.accessToken;
    return accessToken;
  } catch (error) {
    console.log(error);
  }
}

async function fetchAllContextsFromSmartling(projectId, accessToken) {
  const getContextsEndpoint = `https://api.smartling.com/context-api/v2/projects/${projectId}/contexts`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(getContextsEndpoint, {
      method: "GET",
      headers: headers,
    });
    const data = await response.json();
    console.log(data.response.data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function sendToSmartlingContext(projectId, accessToken, htmlFile) {
  const sendContextEnpoint = `https://api.smartling.com/context-api/v2/projects/${projectId}/contexts`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const formData = new FormData();
  formData.append("name", "Context name");
  formData.append("contextType", "HTML");
  formData.append("content", htmlFile, { filename: "de.html" });

  try {
    const response = await fetch(sendContextEnpoint, {
      method: "POST",
      headers: headers,
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getJobsFromSmartling(accessToken, projectId) {
  const getJobsEndpoint = `https://api.smartling.com/jobs-api/v3/projects/${projectId}/jobs`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(getJobsEndpoint, {
      method: "GET",
      headers: headers,
    });
    const data = await response.json();
    console.log(data.response.data.items);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getJobDetails(accessToken, projectId, translationJobUid) {
  const getJobDetailsEndpoint = `https://api.smartling.com/jobs-api/v3/projects/${projectId}/jobs/${translationJobUid}`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(getJobDetailsEndpoint, {
      method: "GET",
      headers: headers,
    });
    const data = await response.json();
    console.log(data.response.data.sourceFiles);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function listUploadedFiles(accessToken, projectId) {
  const getFilesEndpoint = `https://api.smartling.com/files-api/v2/projects/${projectId}/files/list`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(getFilesEndpoint, {
      method: "GET",
      headers: headers,
    });
    const data = await response.json();
    console.log(data.response.data.items);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function checkStatusOfFile(accessToken, projectId, fileUri) {
  const checkStatusOfFileEndpoint = `https://api.smartling.com/files-api/v2/projects/${projectId}/file/status?fileUri=${fileUri}`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(checkStatusOfFileEndpoint, {
      method: "GET",
      headers: headers,
    });
    const data = await response.json();
    console.log(data.response.data.items);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getStoryblokContent() {
  const getStoryblokContentEndpoint = `https://api.storyblok.com/v1/cdn/stories?token=${storyblokToken}&version=published`;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(getStoryblokContentEndpoint, {
      method: "GET",
      headers: headers,
    });
    const data = await response.json();
    console.log(data.stories[1].content);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getStoryblokSpace(storyblokToken) {
  const getStoryblokSpaceEndpoint = `https://api.storyblok.com/v2/cdn/spaces/me/?token=${storyblokToken}`;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(getStoryblokSpaceEndpoint, {
      method: "GET",
      headers: headers,
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

const storyblokSpaceId = 204132;

async function importStoryblokContentJson() {
  // https://mapi.storyblok.com/v1/spaces/:space_id/stories/:id/import.json
  const importStoryblokContentEndpoint = `https://api.storyblok.com/v2/cdn/stories/sk/home?version=draft&token=krSXuG49Bde9vArs1L0hOgtt`;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(
      `https://api.storyblok.com/v2/cdn/stories/sk/home?version=draft&token=krSXuG49Bde9vArs1L0hOgtt`,
      {
        method: "GET",
        headers: headers,
      }
    );

    const existingData = await response.json();

    // get the skTest.json file in the root directory
    const file = fs.readFileSync("skTestFile.json");

    // parse the file to JSON
    const fileJson = JSON.parse(file);

    // add the fileJson to the body key which is in the content key of the existingData

    const mergedData = {
      ...existingData,
      story: {
        ...existingData.story,
        content: {
          ...existingData.story.content,
          body: Array.isArray(existingData.story.content.body)
            ? [...existingData.story.content.body, fileJson]
            : [existingData.story.content.body, fileJson],
        },
      },
    };

  

    // write the merged data to a file
    // fs.writeFileSync("mergedData.json", JSON.stringify(mergedData));

    console.log(mergedData);

    const mergedJson = JSON.stringify(mergedData);

    // send the merged data to Storyblok

    const importResponse = await fetch(importStoryblokContentEndpoint, {
      method: "PUT",
      headers: {
        Authorization: "oWNYeQ2u2TyRLc9KwuLK3wtt-142838-25nPMQxzDsyfRhs81UU5",
      },
      body: mergedJson,
    });

    console.log(importResponse);
    const importData = await importResponse.json();

    console.log(importData);
    return importData;
  } catch (error) {
    console.log(error);
  }
}

async function exportStoryblokContentJson(storyblokToken, storyId) {
  const getStoryblokContentEndpoint = `https://api.storyblok.com/v1/cdn/stories/${storyId}?token=${storyblokToken}&version=draft`;
  const headers = {
    "Content-Type": "application/json",
  };

  const file = fs.createWriteStream("skExportedStory.json");

  try {
    const response = await fetch(getStoryblokContentEndpoint, {
      method: "GET",
      headers: headers,
    });
    const data = await response.json();

    // Write to file

    file.write(JSON.stringify(data.story.content.body[0]));

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function sendFileToSmartling(accessToken, projectId, jsonFile) {
  const sendFileEndpoint = `https://api.smartling.com/files-api/v2/projects/${projectId}/file`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const formData = new FormData();
  formData.append("fileUri", "testFileUpload.json");
  formData.append("fileType", "json");
  formData.append("file", jsonFile, { filename: "exportedStory.json" });

  try {
    const response = await fetch(sendFileEndpoint, {
      method: "POST",
      headers: headers,
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function exportTranslation(
  accessToken,
  projectId,
  localeId,
  file,
  fileUri
) {
  const exportTranslationEndpoint = `https://api.smartling.com/files-api/v2/projects/${projectId}/locales/${localeId}/file/get-translations`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const formData = new FormData();
  formData.append("fileUri", fileUri);
  formData.append("file", file, { filename: "exportedStory.json" });

  try {
    const response = await fetch(exportTranslationEndpoint, {
      method: "POST",
      headers: headers,
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function downloadFile(accessToken, projectId, localeId, fileUri) {
  const downloadFileEndpoint = `https://api.smartling.com/files-api/v2/projects/${projectId}/locales/${localeId}/file?fileUri=${fileUri}`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const file = fs.createWriteStream("skTestFile.json");
  try {
    const response = await fetch(downloadFileEndpoint, {
      method: "GET",
      headers: headers,
    });
    const data = await response.body.pipe(file);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  // const accessToken = await authorizeSmartling();
  // const htmlFile = fs.readFileSync("./.next/server/pages/de.html", "utf8");

  // await sendToSmartlingContext(
  //   process.env.NEXT_SMARTLING_PROJECT_ID,
  //   accessToken,
  //   htmlFile
  // );

  // await fetchAllContextsFromSmartling(
  //   process.env.NEXT_SMARTLING_PROJECT_ID,
  //   accessToken
  // );

  // await getJobsFromSmartling(
  //   accessToken,
  //   process.env.NEXT_SMARTLING_PROJECT_ID
  // );

  // await getJobDetails(
  //   accessToken,
  //   process.env.NEXT_SMARTLING_PROJECT_ID,
  //   "1dczpmpagjl2"
  // );

  // await listUploadedFiles(accessToken, process.env.NEXT_SMARTLING_PROJECT_ID);

  // await checkStatusOfFile(
  //   accessToken,
  //   process.env.NEXT_SMARTLING_PROJECT_ID,
  //   "Test5Smartling"
  // );

  // await downloadFile(
  //   accessToken,
  //   process.env.NEXT_SMARTLING_PROJECT_ID,
  //   "sk-SK",
  //   "exportedStory.json"
  // );

  // await getStoryblokContent();

  // await exportStoryblokContentJson(287979268);

  // const jsonFile = fs.readFileSync("./exportedStory.json", "utf8");
  // console.log(jsonFile);

  // await sendFileToSmartling(
  //   accessToken,
  //   process.env.NEXT_SMARTLING_PROJECT_ID,
  //   jsonFile
  // );

  // const file = fs.readFileSync("./exportedStory.json", "utf8");

  // await exportTranslation(
  //   accessToken,
  //   process.env.NEXT_SMARTLING_PROJECT_ID,
  //   "ru-RU",
  //   file,
  //   "testFileUpload.json"
  // );

  // await checkStatusOfFile(
  //   accessToken,
  //   process.env.NEXT_SMARTLING_PROJECT_ID,
  //   "testFileUpload.json"
  // );

  // await getStoryblokSpace(process.env.NEXT_PUBLIC_STORYBLOK_TOKEN);

  await importStoryblokContentJson();
}

main();

export default main;
