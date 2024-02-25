"use client";
import React from "react";
import { ReactTerminal, TerminalContextProvider } from "react-terminal";
import { signIn, signOut, useSession } from "next-auth/react";

const Terminal = () => {
  const { data } = useSession();

  const isLoggedIn = React.useMemo(() => Boolean(data && data.user), [data]);

  const terminalCommands = React.useMemo(() => {
    return {
      whoami: {
        help: "Tells you who are you",
        action: isLoggedIn ? (
          `${data.user.name} <${data.user.email}>`
        ) : (
          <div>
            <p>You need to be signed in to use this command!</p>
            <span style={{ color: "#2e67d9" }}>Just type `sign-in`</span>
          </div>
        ),
      },

      "sign-in": {
        help: "Redirects you to the login page",
        action: isLoggedIn ? (
          <div>
            <p>You Are Alredy Signed In</p>
          </div>
        ) : (
          signIn
        ),
      },

      "sign-out": {
        help: "Sign out the current user",
        action: !isLoggedIn ? (
          <div>
            <p>You need to be signed in to use this command!</p>
            <span style={{ color: "#2e67d9" }}>Just type `sign-in`</span>
          </div>
        ) : (
          signOut
        ),
      },

      "get-location": {
        help: "Gets your current location",
        action: async () =>
          new Promise((resolve, reject) =>
            navigator.geolocation.getCurrentPosition(
              (pos) =>
                resolve(
                  `Your current position is ${pos.coords.latitude}, ${pos.coords.longitude}`
                ),
              (error) => resolve(`Error: ${error.message}`)
            )
          ),
      },
    };
  }, [data?.user?.email, data?.user?.name, isLoggedIn]);

  return (
    <TerminalContextProvider>
      <div className="border border-blue-700 w-[85vw] md:w-[70vw] m-auto dark:bg-slate-950 rounded-sm h-80 overflow-y-hidden mb-4">
        <ReactTerminal
          prompt={
            data && data.user ? (
              <span className="text-blue-700">{data.user.name} &gt;&gt; </span>
            ) : (
              <span className="text-blue-500">
                $ dipakkhade-dev &gt;&gt;
              </span>
            )
          }
          welcomeMessage={
            <div>
              <p>
                Welcome to my site! Get started by typing `help` command below
              </p>
              {/* <p>
              <span style={{ color: "#2e67d9" }}>Pro Tip:</span> Hack this
              terminal and you{"'"}ll get FREE access to my courses :)
            </p> */}
            </div>
          }
          themes={{
            darkDefault: {
              themeBGColor: "",
              themeToolbarColor: "",
              themeColor: "#2e67d9",
              themePromptColor: "#fff",
            },
          }}
          theme="darkDefault"
          commands={{
            ...Object.keys(terminalCommands).reduce(
              (b, key) => ({ ...b, [key]: terminalCommands[key].action }),
              {}
            ),
            help: (
              <div style={{ marginTop: "5px" }}>
                <p>Available Commands:</p>
                {Object.keys(terminalCommands).map((key) => (
                  <p key={key}>
                    <span style={{ color: "#2e67d9" }}>{key}:</span>{" "}
                    {terminalCommands[key].help}
                  </p>
                ))}
                <p>
                  <span style={{ color: "#2e67d9" }}>clear:</span> clears out
                  everything on screen!
                </p>
              </div>
            ),
          }}
        />
      </div>
    </TerminalContextProvider>
  );
};

export default Terminal;
