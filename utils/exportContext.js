import FormData from "isomorphic-form-data";
const fs = require("fs");

console.log("hello");

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
    console.log(accessToken);
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

async function main() {
  const accessToken = await authorizeSmartling();
  const htmlFile = fs.readFileSync("./.next/server/pages/de.html", "utf8");

  await sendToSmartlingContext(
    process.env.NEXT_SMARTLING_PROJECT_ID,
    accessToken,
    htmlFile
  );

  await fetchAllContextsFromSmartling(
    process.env.NEXT_SMARTLING_PROJECT_ID,
    accessToken
  );
}

main();

export default main;
