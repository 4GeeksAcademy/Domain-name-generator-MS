/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");
        let div = document.createElement(`div`);
        div.innerText = `
        ${pronoun[i]}${adj[j]}${noun[k]}.com
        ${pronoun[i]}${adj[j]}${noun[k]}.net
        ${pronoun[i]}${adj[j]}${noun[k]}.org
        ${pronoun[i]}${adj[j]}${noun[k]}.edu
        `;
        document.body.appendChild(div);
      }
    }
  }
};
