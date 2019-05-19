jQuery("#simulation")
  .on("click", ".s-fef5a022-8fac-4c83-ab6b-eeebb86b140b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Circle")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cadcdbd5-d639-4865-b840-0c142b724760"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Triangle")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cadcdbd5-d639-4865-b840-0c142b724760"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-menu_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cadcdbd5-d639-4865-b840-0c142b724760"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fef5a022-8fac-4c83-ab6b-eeebb86b140b #s-raised_Button > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#2274E1",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-fef5a022-8fac-4c83-ab6b-eeebb86b140b #s-raised_Button": {
                      "attributes-ie": {
                        "-pie-background": "#2274E1",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fef5a022-8fac-4c83-ab6b-eeebb86b140b #s-raised_Button > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#3375B8",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-fef5a022-8fac-4c83-ab6b-eeebb86b140b #s-raised_Button": {
                      "attributes-ie": {
                        "-pie-background": "#3375B8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fef5a022-8fac-4c83-ab6b-eeebb86b140b #s-raised_Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#2274E1",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-fef5a022-8fac-4c83-ab6b-eeebb86b140b #s-raised_Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#2274E1",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fef5a022-8fac-4c83-ab6b-eeebb86b140b #s-raised_Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#3375B8",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-fef5a022-8fac-4c83-ab6b-eeebb86b140b #s-raised_Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#3375B8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fef5a022-8fac-4c83-ab6b-eeebb86b140b #s-raised_Button_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#2274E1",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-fef5a022-8fac-4c83-ab6b-eeebb86b140b #s-raised_Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#2274E1",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fef5a022-8fac-4c83-ab6b-eeebb86b140b #s-raised_Button_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#3375B8",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-fef5a022-8fac-4c83-ab6b-eeebb86b140b #s-raised_Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#3375B8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });