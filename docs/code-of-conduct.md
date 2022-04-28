# Code of conduct

The following rules and regulations were made in agreement with all the team  members on the 25th of April 2022.
Violation of these rules will lead to the offender getting their first warning. 
If they violate the rules again a "strike meeting" will be summoned and that will conclude whether the offender will get another warning or a strike depending on the severity of the violation. 
If the reason for violating the rules is out of emotional depression or unstable mental state, the team member must be reported to the responsible authorities to help them.
The severity of the violation is categorized by the following: 

* Impact on the project
* Attitude and honesty
* Repetition of violation

## Categories in detail

### Work conduct

1. After completing an assigned task, the designated team member is responsible for entering the time they spent into the project time-tracking excel sheet.
2. Work for every week must target a "weekly build" branch to ensure the stability of the main branch
3. Upon completion of their assigned issue, the assigned team member must close their issue on Gitlab and inform the team that they have completed their task.
4. If a team member gets stuck in progressing with an assigned task, they should request assistance from their team as soon as possible
5. If a team member cannot complete an assigned task before the next SCRUM meeting, they must provide a proof of work or research during the next SCRUM meeting.
    
### GIT conduct

For detailed guidelines regarding GitLab usage, please consult the
[Git Conventions](git-conventions.md) document.

 1. After the last meeting of every week, the designated GIT contact is responsible for creating a weekly build branch based on the latest state of the main branch.
 2. When beginning work on an assigned Issue, the appointed team member must create a dedicated branch for that issue from the latest state of the current weekly build branch.
 3. While working, the assigned team should commit whenever any new functionality is added and the entire codebase is functional. Team members should use the message styling rules defined in [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/).
 4. If a bug is encountered that the assigned member cannot resolve, that team member must create a new Issue in the repository. In addition, when resolving a bug, the team member implementing the fix must create a fix branch from the latest state of the current weekly build branch.
 5. Upon completing the issue, the assigned team member must ensure that their branch is up-to-date with the latest state of the current weekly build branch and must create a merge request for their issue.
 6. One (1) hour before the beginning of the last meeting of every week, no new merges into the weekly build branch will be accepted. Any tasks completed after this point will be assigned to the next weekly build branch.
 7. At the last meeting of every week, all team members must review and test the weekly build branch.
 8. After all new commits have been reviewed and tested, the GIT manager is responsible for merging the weekly build branch into the main branch and closing the weekly build branch
### Impact on the project
This refers to how much progress is hindered in the development of the project by the violators actions.
If the violator makes the development halt then it is very serious and can have a great impact on the teams final judgement.
If it just slowed down then it can be quickly discussed casually.

### Attitude and honesty
This refers to the overall behaviour of the team member and how they reply when asked about their progress or for an explanation.
If the team member is rude when asked to explain or is not honest about their work and caught, their behaviour can change the teams final jury judgement.

### Repetition of violation
This refers to how similar the violation is. 
If the violator commits a second violation that is very similar to the first it will just reflect their stubbornness and failure to accept correction. 
Therefore, this can considerably affect the teams final judgement. 

## Team meetings 

All team meetings must be scheduled in the (#session planner) channel in Discord for HBO_IT_FindYourWayIn server. 
These must be scheduled on Fridays during the before the meeting. 
The **General team meetings** must be scheduled in Discord (#session planner) before 6am on the day of the meeting.
The meeting schedules will also be shown in the Plan of approach (POA) document and in the respective channel in Discord.


The agreed **Daily standup** meetings are 10:00am on Mondays and 10:30am from Tuesday to Friday either online or onsite as mentioned in the schedule planner. These meetings must be done whilst standing to increase efficiency.


**All online meetings** are done in Microsoft Teams with cameras on.

1. Team members must be present in every scheduled meeting, in the event that they cannot attend the meeting they must inform all the team members in the Discord (#session planning) channel in time before the meeting depending on the type of meeting:

    * Daily standup - at least 1 hour before
    * Sprint planning - at least 24 hours before
    * Scrum retrospective - at least 24 hours before
    * Group-Client meeting - at least 48 hours before

2. Maintain a friendly and high-spirited behaviour during meetings to keep the overall team spirit high and light.

3. Do not bully another team member on the way they speak or act. 
Everyone is different, respect that.

4. Team members **MUST** look presentable when having onsite and online **Group - Client** meetings.

## Communication

As agreed, Discord will be the main mode of communication between team members.
Microsoft Teams is only used for online meetings.
As a team we need to be transparent and show support for one another.
We also need to consider that team members need a cool downtime after a long day of hard work therefore a stipulated time of 9am - 9pm has been set in which team members may be hyperactive on Discord.

1. Members can be expected to be online or active for messages from 9am - 9pm. 
If a member sends a message outside the stipulated times they cannot expect a reply as soon as when they send a message in the stipulated time. 
Hence, when sending a message outside the stipulated times **DO NOT** hold any team member accountable in the event they do not answer because we all deserve to rest at the end of the day.

2. If a member is unable to log in to discord for whatever reason, they may use other means to tell any other member they cannot join discord and the reason why.

3. Use the dedicated channels for the subject of your message.

4. Do not post content that is not safe for work (**NSFW**) 
   
5. If a member sees an unattended message on discord between 9am - 9pm, they must reply the message in any way even when you do not know the answer to the message. 
For example, if you do not know what to reply when answering question it is better to just reply "I don't know" to let the sender know that we are there for their help where we can help.
However, if the message is meant for a specific member you may not need to reply it.

6. Please use the @ notation in Discord when you want to speak to a specific team member about the project.

7. **DO NOT** spam the server with a lot of messages that when combined can form a sensible short sentence.

## Team interaction

We would like to have a friendly and light atmosphere because it surely helps with the overall progression of the project.

1. If you are stressed or depressed please seek for help, or it may hinder the teams progress or affect other teammates mentally.

2. During working hours it is good to have fun and share jokes, but do not end up disturbing that team member such that they may end up being hindered in their overall progress.

3. Always be nice and kind towards each other.
Never look down upon another team member as it can cause tension.

4. Always help another team member where you can.
But, do not use another team member as a "walking stick" because it can result in them getting too much workload and slowing down their own progress. 
Learn to research!

5. All disagreements and disputes must be settled together.
Avoid any negative confrontational behaviour towards another team member, instead address your issue to the appointed SCRUM master.
If the issue is against the SCRUM master then please address it in discord or tell the coach.

6. If a member raised an issue against you in a formal manner **PLEASE DO NOT** take it to heart, its just business.

## Coding

Team members are expected to follow the standardized coding conventions to make life easier for one another. 

Making the code messy intentionally for "later fixing" will definitely cause issues in the near future so please try your best to make the code meet the agreed standards as written in the coding convention document.

A pipeline will be implemented to ensure the standards are met using a linter.


