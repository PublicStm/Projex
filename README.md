#Projex App
![Alt text](/public/ProjexPreview.png?raw=true "Optional Title")

A small project to get back into React. Planned is a small app, similar to Jira from Atlassian. A data interface will be implemented that allows to switch between data sources. The first data source will be Firebase, but in the medium term mysql will be connected.

##Features (planned and done)

* Ticket
    * CRUD
    * :heavy_check_mark: List
    * :heavy_check_mark: Detail
    * Properties (Public):
        - :heavy_check_mark: Title
        - :heavy_check_mark: Description
        - Due date
        - :heavy_check_mark: Prio
        - State
        - Tag
        - :heavy_check_mark: Ticket number
* Kanban board
    * Drag&Drop ticket between columns (states)
* Dynamic status (open, in progress & done ...)
    * CRUD
    * List
    * Detail
* Project
    * CRUD
    * List
    * Detail
    * :heavy_check_mark: Select current project
* Contacts (To have their information in the ticket when it is needed)
    * CRUD
    * List
    * Detail
    * Import via VCF
* Datainterface (To convert the queries to the correct format so that the components can work with the result, regardless of which data source is used)
    * Caching
* Datasource
    * Firebase Database
    * MySQL
* Auth (maybe)

##Install

```npm install```

##Build

```npm build```

##Start

```npm start```