# LSCS Website

## Development Setup Prerequisites 

The softwares needed when developing this project for each 
OS and development setups of each OS are listed below.

[NodeJSv16]: https://nodejs.org/download/release/latest-v16.x/ "Node.js v16 LTS"
[NVM]: https://github.com/nvm-sh/nvm#installing-and-updating "Node Version Manager"
[GridsomeCLI]: https://gridsome.org/docs/#how-to-install "Gridsome CLI"
[Yarn]: https://classic.yarnpkg.com/lang/en/docs/install/#alternatives-stable "Yarn"
[Docker]: https://docs.docker.com/get-docker/ "Docker"
[WSL2]: https://learn.microsoft.com/en-us/windows/wsl/install-manual "WSL2"

### MacOS or Linux

#### Local Setup

- **Node.js v16 LTS (v16.20.0 Gallium)** [*[Download][NodeJSv16]*] 
or **nvm (node version manager)** [*[Installation][NVM]*]
- **Gridsome CLI** [*[Installation][GridsomeCLI]*]
- **Yarn** [*[Installation][Yarn]*]

#### Dockerize Setup

- **Docker Desktop** [*[Download][Docker]*]

### Windows

#### Local Setup without WSL 2 (Windows Subsystem for Linux v2)

- **Node.js v16 LTS (v16.20.0 Gallium)** [*[Download][NodeJSv16]*]
- **Gridsome CLI** [*[Installation][GridsomeCLI]*]
- **Yarn** [*[Installation][Yarn]*]

#### Local Setup with WSL 2 (Windows Subsystem for Linux v2)

- **WSL 2 (Windows Subsystem for Linux v2)** [*[Installation][WSL2]*]

Install these softwares *inside the WSL2 Linux distribution*, preferably **Ubuntu**:

- **Node.js v16 LTS (v16.20.0 Gallium)** [*[Download][NodeJSv16]*] 
or **nvm (node version manager)** [*[Installation][NVM]*]
- **Gridsome CLI** [*[Installation][GridsomeCLI]*]
- **Yarn** [*[Installation][Yarn]*]

#### Dockerize Setup

- **WSL 2 (Windows Subsystem for Linux v2)** [*[Installation][WSL2]*]
- **Docker Desktop** [*[Download][Docker]*]

#### Additional Notes

- For the Docker Setup in Windows, cloning of project can be done inside
the **Windows file system** or inside the **WSL 2 Linux distribution file system**.
    - When project is cloned inside the **Windows file system**, **hot reload won't work
    when running the development server of Gridsome**. Though the port of the docker
    is exposed to your host machine, it is important to note that the *Docker container
    is being ran as a process in the WSL 2 Linux distribution*. Since it is running in
    WSL 2, any access to the *windows file system is another network connection* and the **Gridsome development server is incapable of watching this network connection**. (This 
    issue is still open in their repository)
    - When project is cloned inside the **WSL 2 Linux Distribution file system**,
    **there's a possiblity that the some or all the files in the project folder could
    either be lost or corrupted**. To properly save and backup your changes, branch out 
    from your current feature branch and name that branch as `wip-<name-of-branched-out-feature-branch>`, and then push it in the remote repository.
- In order to edit the files when the project folder is cloned inside the WSL2
Linux distribution, either **terminal editors** (e.g. nano, micro, VIM, neovim, etc.) or 
**[VS Code](https://code.visualstudio.com/) with 
[WSL Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)**.
- The WSL 2 Linux distribution has its own **`git`**. Unless, it is not preinstalled, then 
installation may be needed.
    - Since **`git`** is inside it, then your Git Credentials for Github is not 
    saved in the system.
    - When using the **`HTTPS`** protocol for logging in to your GitHub account in the 
    Linux terminal be sure to input your **`Personal Access Token (PAT)`** in the 
    **`password`** field. (This is a new protocol by GitHub).
        - Guide on how to generate your **`Personal Access Token (PAT)`** 
        [*[Guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)*]

## Supplementary Knowledge and Materials

Here are some materials that could provide supplementary knowledge to the frameworks
and softwares that are going to be used in the project.

### Gridsome and Netlify CMS

- **Netlify CMS - Content Management Systems (using Gridsome)** 
[*[YouTube](https://www.youtube.com/watch?v=ryP1RMA7P9Y)*]
- **Gridsome Docs** [*[Documentation](https://gridsome.org/docs/)*]

### Docker

- **Docker Crash Course Tutorial** [*[YouTube](https://youtube.com/playlist?list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7)*]
- **Docker Docs** [*[Documentation](https://docs.docker.com/)*]

### WSL 2 (Windows Subsystem for Linux v2)

- **WSL 2: Getting Started** [*[YouTube](https://www.youtube.com/watch?v=_fntjriRe48)*]
- **Manual Installation Steps for Older Versions of WSL** [*[Installation][WSL2]*]

## Local Development

### 0. Install yarn package manager

```bash
npm install --global yarn
```

### 1. Clone the repository

```bash
# Clone the `LSCS_Website_CMS`
git clone <repository-https-clone-link>

# Move into the project directory
cd LSCS_Website_CMS
```

### 2. Install the dependencies

```bash
# Install dependencies
yarn install
```

### 3.a. Run development server

```bash
# Run Gridsome dev server
yarn dev
```

Access the website at `http://localhost:8080`

> **`NOTE:`** This *might not work especially for the latest releases of Node.js*. 
> Use **Node.js v16 LTS** as much as possible.

### 3.b. Build the project

```bash
# Generate static site inside the `dist` directory of the project
yarn build
```

## Dockerize Development

### 1. Clone the repository

```bash
# Clone the `LSCS_Website_CMS`
git clone <repository-https-clone-link>

# Move into the project directory
cd LSCS_Website_CMS
```

### 2. Building Docker image

```bash
# Build the Docker image for desirable development environment,
# then create a container and start it.
yarn build:docker
```

Access the website at `http://localhost:8080`

> **`NOTE:`** After building the image, it will create the dev container and run 
> it. This will result in starting the Gridsome development server. Enter `<Ctrl> + <c>`
> to stop the development server and the container.

### 3. Starting deveopment container

```bash
# Start dev container using the built Docker image
yarn dev:docker
```

Access the website at `http://localhost:8080`

> **`NOTE:`** Enter `<Ctrl> + <c>` to stop the development server and the container.

### Resetting setup

```bash
# Clear/Delete the Docker image, container and  
# volumes created for the development enviroment
yarn docker-reset
```