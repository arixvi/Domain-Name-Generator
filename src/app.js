/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronouns = ["my", "your", "their", "our"];
const adjectives = ["tech", "web", "digital", "global"];
const nouns = ["hub", "zone", "world", "guru"];

function generateDomainName() {
  const pronounIndex = Math.floor(Math.random() * pronouns.length);
  const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
  const nounIndex = Math.floor(Math.random() * nouns.length);
  const domainName =
    pronouns[pronounIndex] +
    adjectives[adjectiveIndex] +
    nouns[nounIndex] +
    ".com";
  displayDomainName(domainName);
}

function displayDomainName(domainName) {
  const domainList = document.getElementById("domain-names");
  const domainItem = document.createElement("li");
  domainItem.textContent = domainName;
  domainList.appendChild(domainItem);
}

const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", generateDomainName);
