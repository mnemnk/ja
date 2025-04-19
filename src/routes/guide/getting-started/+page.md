---
title: Getting Started
---

## Installing Mnemnk

This section explains how to get started with Mnemnk.

Mnemnk App is created using Tauri and can run on Windows, macOS, and Linux.
This installation guide primarily focuses on setting up Mnemnk in a Windows environment.

### Installing Mnemnk App (Windows)

Download Mnemnk App from the [GitHub releases page](https://github.com/mnemnk/mnemnk-app/releases). The `_aarch64.dmg` file is for macOS, `_amd64.deb` is for Linux, and `_x64_en-US.msi` is for Windows.


![](/images/guide/getting-started/mnemnk-release-page.png)

If you see the following warning when opening the downloaded file, click "More info" and then click "Run anyway".

![](/images/guide/getting-started/windows-protect.png)

When you run it, a setup wizard will open. Follow the wizard to complete the installation.

![](/images/guide/getting-started/mnemnk-setup-wizard1.png)

![](/images/guide/getting-started/mnemnk-setup-wizard2.png)

You can install it anywhere you want.

![](/images/guide/getting-started/mnemnk-setup-wizard3.png)

Accept the UAC prompt when it appears.

![](/images/guide/getting-started/mnemnk-setup-wizard4.png)

Mnemnk App doesn't open a window just by launching it. You can confirm it's running in the system tray at the bottom right of your desktop.

To open the window, either select "Show" from the menu of the tray icon or double-click the icon created on the desktop.

### Configuring Mnemnk App

When you start Mnemnk for the first time, the Settings page will open. (If it doesn't appear, click the gear ⚙ icon.)


![](/images/guide/getting-started/settings.png)

At a minimum, you need to configure the Mnemnk Directory.

#### Mnemnk Directory

Specify an empty directory (folder) as the Mnemnk Directory. The following three directories will be created there:

- agent_flows: Where agent flows are saved.
- agents: Place agents here.
- data: Where the database and screenshots are saved.

:::warning
Directories in cloud storage (OneDrive, iCloud, etc.) are not recommended.
Database files might be corrupted.
:::

<Expansion title="Other Settings (Optional)" showIcon={false}>

#### Auto Start

When enabled, Mnemnk App will automatically start when you login.

#### Shortcut Keys

- Global Shortcut: Shortcut to invoke Mnemnk App.
- Fullscreen: Full-screen display
- Screenshot Only: Hide information in the daily view. The space key is set by default.
- Search: Go to the search page

#### Thumbnail Width / Height

The size of thumbnails used in the daily page. If only one is specified, the aspect ratio of the image will be preserved. The default is `Height = 36`.

#### Day Start Hour

Set what hour should be considered the start of a day on the daily page. The default is 0 (12:00 am). Night owls might find that with the default setting, late-night work is split between two days, so it's good to set this according to your bedtime.

If you change this setting, click Reindex YMD to reindex past data. (Don't close the app for a while after clicking.)

</Expansion>

### Summary

In this section, we learned how to install, set up, and run Mnemnk App.

If you want to use Mnemnk as a lifelogging tool, please proceed to install the [Lifelogging Agents](/guide/lifelogging-agents).
