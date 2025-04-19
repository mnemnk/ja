---
title: Lifelogging Agents
---

## Installing Lifelogging Agents

This section explains how to set up a basic lifelogging environment using Mnemnk.

### Environment Setup

Before installing Lifelogging agents, you need to configure your environment and ensure several prerequisites are met for Lifelogging agents to function properly.

#### Installing Various Build Tools

While pre-built binaries of Mnemnk App are available from GitHub, many agents, including Lifelogging agents, assume that users have their own development environment.

The tools you need will vary depending on the agent.
For the installation described on this page, you'll need Git and Rust.

- [Git](https://git-scm.com/)
- [Rust](https://www.rust-lang.org/ja/learn/get-started)

### Installing Mnemnk Lifelogging Agents

[Mnemnk Lifelogging Agents](https://github.com/mnemnk/mnemnk-lifelogging-agents) is a collection of lifelogging agents.

- [Mnemnk Application](https://github.com/mnemnk/mnemnk-lifelogging-agents/tree/main/mnemnk-application): Outputs application activity
- [Mnemnk Screen](https://github.com/mnemnk/mnemnk-lifelogging-agents/tree/main/mnemnk-screen): Outputs screen captures
- [Mnemnk API](https://github.com/mnemnk/mnemnk-lifelogging-agents/tree/main/mnemnk-api): Acts as an API server to output information from external applications

Clone the repository into the "agents" directory that was created in the Mnemnk Directory you specified during Mnemnk App installation.

```sh
cd {You Mnemnk Directory}/agents
git clone https://github.com/mnemnk/mnemnk-lifelogging-agents.git
```

Build the executable binaries in the cloned directory.

```sh
cd mnemnk-lifelogging-agents
cargo build --release
```

Restart Mnemnk App, and open lifelogging from the Agents menu in the upper right. You'll see that Application, API, and Screen have been added.

Choose Import from the File menu, and a file dialog will appear. Select `logging.json` from the `mnemnk-lifelogging-agents/` directory you cloned earlier.

The agents will be loaded in a stopped state, so press the play button ▶ at the bottom center to start the agents.

![](/images/guide/getting-started/screenshot-lifelogging-agents-imported.png)

When started, the agents' colors will brighten.

![](/images/guide/getting-started/screenshot-lifelogging-agents.png)

Select "Save" from the File menu to save the configuration. (It will be saved to `agent_flows/logging.json`)

Click Home at the left end of the navigation bar at the top of the screen, and reload (Ctrl+R). You'll notice that today's date has changed, indicating that data has been saved. 

![](/images/guide/getting-started/first-logging.png)

Click to check it out.

![](/images/guide/getting-started/first-daily-page.png)

Congratulations! 🎉

#### Setting Up Auto Start

Recording only happens while Mnemnk App is running in the background. To keep recording continuously, it's recommended to turn on "Auto Start" on the Settings page so that Mnemnk App starts when you login to the OS. Don't forget to Save and restart Mnemnk App after turning it on.

### Installing Mnemnk Browser Extension

What the author personally finds most useful is the integration with web browsing through the browser.
In fact, Mnemnk's development began with this feature[^1].

Using the [Mnemnk Browser Extension](https://github.com/mnemnk/mnemnk-browser-extension), page navigations in the browser are sent to the Mnemnk API and can be utilized by Mnemnk App.

To install it[^2]:

1. Open the release page and download `mnemnk-X.Y.Z-chrome.zip`.
2. Open Chrome's Manage extensions `chrome://extensions/`.
3. Turn on "Developer mode" in the upper right.
4. Drag and drop the downloaded zip file into the browser.

You can specify the address and token for the Mnemnk API agent in the options, but the defaults are fine. It's good to change these when you change the settings of the Mnemnk API agent.

### Summary

In this section, we learned how to install Mnemnk lifelogging Agents and the Mnemnk Browser Extension.
As you can see from the fact that even the basic lifelogging function of Mnemnk App is provided as an external program, the information Mnemnk App collects and how it is utilized depends on how you build your agents. You can use Mnemnk as a lifelogging tool as the author envisions, or not.

[^1]: Development initially began in March 2020 under the name "everything." That's a story for another time.

[^2]: We're also working on submitting it to the Chrome Web Store, but there are various procedures needed, such as having a homepage with a Privacy Policy...
