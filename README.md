# Code Blue (PWA)

This is the progressive web app version of Code Blue.

Code Blue is a mental health app for YC students. The focus of project is on alleviating academic stress, raising awareness about mental health and promoting stronger bonds within the school community. 

We aim to create an app to help students at YC deal with stress. In this app, we will include meditation recordings from Mr C, a scheduling feature to remind students not to procrastinate, a mental health self-assessment, counsellors’ contacts and mental health hotlines, and the option to message the Code Blue team to participate in the “Choco Project”. The aim of the app is to give students a tool in their everyday lives to manage their mental health.

## Overview

The app is structured like this:
* Launch Screen: short splash screen while app loads
* Home Screen: main page with links to About, Meditation, Schedule, Help and Choco Project screens.
* About Screen: contains information about creators, acknowledgements, and a rating system for feedback.
* Meditation Screen: contains click-and-play recordings of meditation sessions from Mr C.
* Schedule Screen: contains a Pomodoro timer to help students structure work times.
* Well-being Screen: contains a mental health self-assessment, and a list of contacts for school counsellors and mental health hotlines.
* Choco Project Screen: contains information about the Choco Project, and an entry form for users to submit requests to the Choco Project.

## Development

The progressive web app version of Code Blue is being developed using Next JS. As such, each screen may be split into separate reusable components.

Animations and transitions are created using [Framer Motion](https://www.framer.com/motion/). Form submissions are passed through [Static Forms](https://www.staticforms.xyz/).

The UI layout was designed on Figma, and the prototype can be viewed [here](https://www.figma.com/file/IXyJRs2XBycFgbSsQM7iLD/CODE-BLUE?node-id=0%3A1).

**Here is a task list:**
1. HOME SCREEN
  - [x] Add basic view layout and static content
2. ABOUT SCREEN
  - [x] Add basic view layout and static content
  - [x] Add rating mechanism for feedback
3. MEDITATION SCREEN
  - [x] Add basic view layout
  - [ ] Embed click-and-play audio files of meditation sessions to appropriate boxes
4. SCHEDULER SCREEN
  - [x] Add basic view layout
  - [x] Embed Pomodoro Timer with start and stop buttons
  - [x] Add functionality to timer
5. HELP SCREEN
  - [x] Implement a mental well-being self assessment
  - [x] Add contact information and hotlines
6. CHOCO PROJECT SCREEN
  - [x] Introduce the Choco Project
  - [x] Add a functional submission form
7. MISCELLANEOUS
  - [ ] Convert into a progressive web app, following the guidelines on Google.

## How to contribute

- Install git on your computer. See the [documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). Create an account on Github.
- Click the "Fork" button in the upper right to make your own copy of the repository. DO NOT EDIT THE MASTER BRANCH.
- Open terminal. Clone the fork to your computer using `git clone https://github.com/yourusername/code-blue.git`.
- Go into the folder just created. (Right click on folder, go to services, press new terminal at folder.) Set up the upstream remote so that you can eventually pull changes from the main repository. `git remote add upstream https://github.com/mee-kell/code-blue.git`.
- Fetch and track all branches. `git fetch --all`
- Pull the latest changes from the remote repository. `git pull --rebase upstream master`
- Work on your task.
- Enter `git status` to see what files have changed.
- To stage all new files, enter `git add -A`.
- Use `git commit -m "/message/"` to commit changes and add a message to describe the changes.
- Update to the latest code from the main repository. `git pull --rebase upstream master`.
- To upload your changes, use `git push`.
- Your forked repository will update your changes. **To submit these changes to the main repository here, create a pull request asking to merge your fork and the main code.**

### Creators
Michelle Lo
Created for CAS Project 2020.
