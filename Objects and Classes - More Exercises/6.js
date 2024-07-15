function manageBrowserHistory(browserObj, actions) {
    let {
        "Browser Name": browserName,
        "Open Tabs": openTabs,
        "Recently Closed": recentlyClosed,
        "Browser Logs": browserLogs
    } = browserObj;

    actions.forEach(action => {
        if (action === "Clear History and Cache") {
            openTabs = [];
            recentlyClosed = [];
            browserLogs = [];
            return;
        }

        let actionParts = action.split(" ");
        let actionType = actionParts[0];
        let site = actionParts.slice(1).join(" ");

        if (actionType === "Open") {
            if (!openTabs.includes(site)) {
                openTabs.push(site);
            }
            browserLogs.push(`Open ${site}`);
        } else if (actionType === "Close") {
            if (openTabs.includes(site)) {
                let index = openTabs.indexOf(site);
                openTabs.splice(index, 1);
                recentlyClosed.push(site);
                browserLogs.push(`Close ${site}`);
            }
        }
    });

    console.log(browserName);
    console.log(`Open Tabs: ${openTabs.join(", ")}`);
    console.log(`Recently Closed: ${recentlyClosed.join(", ")}`);
    console.log(`Browser Logs: ${browserLogs.join(", ")}`);
}


function manageBrowserHistory(browserObj, actions) {
    const { "Browser Name": browserName, "Open Tabs": openTabs, "Recently Closed": recentlyClosed, "Browser Logs": browserLogs } = browserObj;

    actions.forEach(action => {
        if (action === "Clear History and Cache") {
            openTabs.length = 0;
            recentlyClosed.length = 0;
            browserLogs.length = 0;
        } else {
            const [command, ...siteParts] = action.split(" ");
            const site = siteParts.join(" ");

            if (command === "Open") {
                if (!openTabs.includes(site)) openTabs.push(site);
                browserLogs.push(`Open ${site}`);
            } else if (command === "Close") {
                const index = openTabs.indexOf(site);
                if (index !== -1) {
                    openTabs.splice(index, 1);
                    recentlyClosed.push(site);
                    browserLogs.push(`Close ${site}`);
                }
            }
        }
    });

    console.log(browserName);
    console.log(`Open Tabs: ${openTabs.join(", ")}`);
    console.log(`Recently Closed: ${recentlyClosed.join(", ")}`);
    console.log(`Browser Logs: ${browserLogs.join(", ")}`);
}


// Test cases
let browserObj1 = {
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
};
let actions1 = ["Close Facebook", "Open StackOverFlow", "Open Google"];
manageBrowserHistory(browserObj1, actions1);

console.log();

let browserObj2 = {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
};
let actions2 = ["Open Wikipedia", "Clear History and Cache", "Open Twitter"];
manageBrowserHistory(browserObj2, actions2);
