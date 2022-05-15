
<h1 align="center">ROOMMATE FINDER</h1>
<p><em>This document provides general information on the Roommate Finder client-side application.  For more information about the Roommate Finder API, please see <a href="https://github.com/jackseabolt/roommate-finder-server">roommate-finder-server</a>.</em></p>


Why Roommate Finder
-------------
Other apps help you find an available room in your area, but only one app helps you find the perfect roommate: Roommate Finder! Roommate Finder uses a series of personality questions to match you not only with a room in your area, but also with a perfect roommate. Simply fill out a quick questionaire and your feed will be populated with people looking for a roommate just like you! 

How it Works
------------
<table layout="fixed">
  <tr>
    <td>
      <p>The login page has links for both logging in registered users and creating a new user. To create a new account, click "Get Started."</p>
    </td>
    <td>
      <img src="/src/images/readme1.png" max-height="240px" witdh="auto">
    </td>
  </tr>
  <tr>
    <td>
      <p>Then select what type of roommate you are looking for. You can select to offer a room, find a roommate you would like to move into your present living space or find a roommate without a current apartment.</p>
    </td>
    <td>
      <img src="/src/images/readme2.png" max-height="240px" witdh="auto">
    </td>
  </tr>
  <tr>
    <td>
      <p>After registration, you will be redirected to your dashboard. Without filling out your question form, your dashboard will be blank. To fill out your question profile, click the link at the top labeled "Questions."</p>
    </td>
    <td>
      <img src="/src/images/readme3.png" max-height="240px" witdh="auto">
    </td>
  </tr>
  <tr>
    <td>
      <p>Fill out the question form. The more honest you are, the better your matches will be!</p>
    </td>
    <td>
      <img src="/src/images/readme4.png" max-height="240px" witdh="auto">
    </td>
  </tr>
  <tr>
    <td>
      <p>Once you fill out your questions, your dashboard will be populated with roommates that were matched with you that live in your area!</p>
    </td>
    <td>
      <img src="/src/images/readme5.png" max-height="240px" witdh="auto">
    </td>
  </tr>
    <tr>
      <td>
        <p>Click on one of your matched roommates. You will be reirected to that users profile. If you like what you read, you can reach out to the user directly using the message button.</p>
      </td>
    <td>
      <img src="/src/images/readme6.png" max-height="240px" witdh="auto">
    </td>
  </tr>
</table>


Technology 
------------
This application was built using React, Node.js, Express, Mongo and Mongo. It also uses information from the Google Maps API. 

For local use
--------

```bash
# Clone repository
git clone https://github.com/giri68/roommate-finder-client.git

# Change directory
cd roommate-finder-client

# Install NPM dependencies
npm install

# Start the server
npm start
```
