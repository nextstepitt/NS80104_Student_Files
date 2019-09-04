![](.common/nsbanner.png?raw=true)

# NS80104 Web Tier Testing - Student Files

This project contains the lab framework for the Web Tier Testing presentation.
You may clone the framework or download a zip of the framework on this page.
There is working solutions for all of the labs, and that may be a good reference for setting up unit, integration, and system
tests for a jQuery project.

Do the rapidly changing landscape of web application programming in general, this material is updated frequently.
Feel free to come back and download new versions whenever you want to.

## License

The lab framework code is licensed under the MIT license. The corresponding courseware is not. You may use and modify all or part of it as you choose, as long as attribution to the source is provided per the license. See the details in the [license file](./LICENSE.md) or at the [Open Source Initiative](https://opensource.org/licenses/MIT)

## Class Setup

Administrative access may be required to install some tools. If you are taking the class online, you may want to consider using dual
monitors or working in an environment with a projection screen to follow what the instructor demonstrates.

### Required Software Configuration

* Node.js 9 or higher.

## Student Files Folder Layout

```
Student_Files
│
└── [Insert Course Title]
    └── Labs
    │       tc3-client
    │ 
    └── Resources
    │    └── WebService
    │ 
    └── Solutions
        └── tc3-client
```

* All courses have a separate folder under Student_Files so they can exist side-by-side.
* Each lab folder has a number and a name, to remind you of what the lab was about.
* The Labs folder is an empty space to do your work.
* You can always copy the solution of a previous lab as the starting point for a new lab.

## Running the Solutions

The lab and solution are node projects.
Run npm install to install all the required packages.
The solution has tests, the starter lab has only the application but the configuration is already set up for the jest tests.

<hr>
Copyright © 2019 NextStep IT Training. All rights reserved.