# ComicsApp

ComicsApp is a web application that allows users to brows comics. The application fetches comic data from an external API and provides a user-friendly interface to view random comics. Users can also maintain a history of viewed comics, which is saved locally on their device.

## Features

- **View Random Comics**: fetch a random comic from the API and display it with its title and image.
- **Comic History**: keep track of the comics you've viewed, and easily revisit them from the history list.
- **Local Storage**: your comic history is saved in your browser's local storage, so it persists even after refreshing the page.

## Technology Stack

- **Frontend**: React, TypeScript, Axios, MobX, MUI, ESLint
- **Backend**: ASP, .NET 7 , Entity Framework Core 7, MSSQL

## Installation

To run the application locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/eturchin/ComicsApp.git
   ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Set up the database connection string and migrations:**
    - Open the appsettings.json file.
    - Set the correct connection string for your database in the ConnectionStrings section. Example:
    ```bash
    "Data Source=(localdb)\\mssqllocaldb;Initial Catalog=ComicDb;MultipleActiveResultSets=true;Encrypt=False"
    ```
    - Ensure that migrations are automatically applied on application startup. This can be configured in the Program.cs.
    
4. **Start the backend server:**
    - Run the backend server by executing the appropriate command (e.g., dotnet run for .NET projects).
    - Once the backend server is running, the ClientApp will automatically launch, allowing you to access the web application.
