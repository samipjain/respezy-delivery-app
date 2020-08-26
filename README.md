# RespezyDeliveryApp

The application has been developed using Bootstrap and Angular v9 framework. Name of the retail company is Respezy

Assuming Angular CLI (v 9.1.8) is installed in your computer.

Below are the steps to run this application. Open terminal and exceute the following commands -

```
git clone https://github.com/samipjain/respezy-delivery-app.git

cd respezy-delivery-app

npm install && npm start
```

This will start the application on your default browser. If happen otherwise, navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Make sure your server is running.

# Folder structure

Within the `src/app` folder, there are 2 main files/folders - `components` and `services`.

```
src/app
    - services
        - get-order
        - get-delivery-quote
        - delivery-request
```

The `services` folder connects the real data to components by fetching data backend server. HTML and Typescript logic are in app.component.html and app.component.ts

For Future Work - 
- Delivery Request can be displayed in a table format for better visibility and keep track of all deliveries
- Error handling can be incorporated to increase robustness of the system

Please email `samip@mit.edu` for any queries/comments.