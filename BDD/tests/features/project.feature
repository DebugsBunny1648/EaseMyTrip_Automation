Feature:Tour Packages
Scenario:Search

Given User is on Tour Packages
And User enters <username> and enter <password>
| From                            | To               |
| New Delhi                       | Chennai          |
| Bangalore                       | Jaipur           |
| Pune                            | Banglore         |
| Hyderbad                        | Chennai          |
| Jaipur                          | New Delhi        |

And User clicks on Login button
Then User is logged in Successfully
And User is able to navigate to product page