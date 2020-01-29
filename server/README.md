# Backend Server

## **NOTE: DO NOT MODIFY ANY CODE INSIDE THIS DIRECTORY.** Feel free to look at the files, but do not make any changes.

## Overview

This is a REST api which you can use to retrieve information regarding surgery consultations. You will use this api to populate your React Native application with data.

## Setup Instructions

1. In a terminal window, navigate into this directory. (`/server`)
2. Ensure you have [Yarn] installed on your machine.
3. Run the terminal command `yarn install` to install the necessary dependencies.
4. Run the terminal command `yarn server` to start the server. You should see the following message in your terminal:

   `Server listening on port 9001.`

   If you visit `http://localhost:9001/` in your browser, you should see the following message:

   `{"message":"Server is running."}`

   If you see both of these messages, your server is up and running properly!

   [yarn]: https://legacy.yarnpkg.com/en/docs/install#mac-stable
   [postman]: https://www.getpostman.com/

## Server Data Types

- The server can return two types of data: `categories` and `doctors`.
- `Categories` refers to the types of surgery that doctors specialize in. An example of a category is below:

```
{
    id: 1, // integer
    name: "Rhinoplasty", // string, the name of the surgery type
    lowestPrice: "$2,834.93", // string, the lowest available price for this type of surgery
    highestPrice: "$8,418.32", // string, the highest available price for this type of surgery
    numDocs: 3 // integer, the amount of doctors who specialize in this category of surgery
}
```

- `Doctors` refers to the surgeons themselves. An example of a doctor is below:

```
{
    id: 1, // integer
    categoryId: 2, // integer, relates to the id of the surgery category which he specializes in
    name: "Dr John Doe", // string
    facility: "St. Joseph Hospital", // string, the location where the doctor works
    price: "$8241.40", // string, the cost of the doctor's service
    bio: "Lorem ipsum dolor sit amet...", // string, a doctor's bio
    picture: "https://someimageurl.com" // string, a url to the doctor's profile picture
}
```

## Usage
