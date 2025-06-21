# App specifications
- app creates tasks in a grid-card layout.  You can change the status of each task by the dropdown menu at the bottom.
- tasks are persistent across page reloads
-  Custom category creation through the add task bar, when type in a new category name on a task and hit add task, that category is added to the filter list.
-  tasks are deletable through the x on the top right corner of the card
-  




# Quick Access Questions
- Challenges faced during the project.
- How you approached solving those challenges.
- What you would improve if given more time.

# Question Answers
## the challenges I faced were:
  1. rather than making something basic I wanted to make a dynamic grid layout, leading to a difficult card-builder created in javascript
  2. figuring out arrow functions at a basic level so I could implement ideas or solutions I found in stack overflow while understanding them rather than copy-pasting
  3. studying and understanding javascript's date formats and uses.
  4. implementing a delete button
  5. separationg of some things like event listeners and elements built into the cards

 ## How I approached solving those challenges
 1. I made a goal, and I chose to stick with it in order to improve myself and push myself further
 2. Lots of research and googling to figure out why arrow functions work the way they do.  I see them in the same line I see python lambda, one line execution code written in short hand.  I used this in 2 different array filter functions, where I could have created full functions but opted for shorthand instead.  There may still be use cases I don't understand for this, but I have a grasp of basic arrow functions
 3. Read over javascript documentation and stack overflow to ensure I had an ok understanding of both comparing date/time and presenting it in a readable manner for the user
 4.  I managed to find the solution on stack overflow and used css for proper positioning of button.  I originally intended to use an image but doublechecked and found out there was an & code for an x.
 5. I've attached an event listener to each separate card for their dropdowns and delete buttons.  I'm sure there is a far better way of doing this in advanced dom manipulation, for better performance and organization, but I kept it simple here for the time being.

## How would I Improve
- add in a sort function by time. Change custom categories to create categories with custom colors which apply to the cards based on their categories.  
