This is an Aurelia project alongside an ASP.Net Core project. 

You'll need latest versions of nodejs and asp.net core installed to get started.
You'll also need to `npm install aurelia-cli -g`

After that you will need to `npm install` to get all the dependencies for the web client. 
If you're using Visual Studio all you need to do is build the project and it should bring in all the NuGet packages it needs. 
If you're using something else then you'll need to `dotnet restore`

To run the app locally tart the ASP.Net Core app first. If you're not using Visual Studio you need to `dotnet run`. Then start the web client: `au run`. 