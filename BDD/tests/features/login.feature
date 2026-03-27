Feature:Login Functionality
Scenario:Login with valid credentials

Given User is on Login Page
And User enters <username> and enter <password>
| username                        | password                |
| standard_user                   | secret_sauce            |
| performance_glitch_user         | secret_sauce            |
| problem_user                    | secret_sauce            |
| error_user                      | secret_sauce            |
| visual_user                     | secret_sauce            |

And User clicks on Login button
Then User is logged in Successfully
And User is able to navigate to product page








# Scenario:Login with performance_glitch_user credentials

# Given User is on Login Page
# And User enters username as "performance_glitch_user"
# And User enters password as "secret_sauce"
# And User clicks on Login button
# Then User is logged in Successfully
# And User is able to navigate to product page