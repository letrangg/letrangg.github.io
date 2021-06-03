(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"8rnM":function(e,t,a){},F0uZ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=h;var i=l(a("q1tI")),n=a("Wbzz"),o=l(a("17x9")),s=a("dj5g");function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function h(e){var t=e.to,a=e.title,o=e.children,l=e.className,r=e.stripHash,u=void 0!==r&&r,h=e.gatsbyLinkProps,d=void 0===h?{}:h,p=e.onAnchorLinkClick,b=u?s.handleStrippedLinkClick:s.handleLinkClick,m=c(c({},d),{},{to:u?(0,s.stripHashedLocation)(t):t,onClick:function(e){return b(t,e,p)}});return a&&(m.title=a),l&&(m.className=l),i.default.createElement(n.Link,m,o||a)}h.propTypes={to:o.default.string.isRequired,title:o.default.string,className:o.default.string,stripHash:o.default.bool,gatsbyLinkProps:o.default.object,onAnchorLinkClick:o.default.func,children:o.default.node}},TQu5:function(e,t,a){"use strict";a.r(t);a("q1tI"),a("oEq0");var i=a("tBDR"),n=a("seuo"),o=a.n(n),s=a("Bl7J"),l=a("AeFk");t.default=function(e){e.data;return Object(l.a)(s.a,null,Object(l.a)("div",{className:o.a.container},Object(l.a)("h1",null,"Winged - a leap motion drawing app for users with hand and arm disabilities"),Object(l.a)("h2",null,"Solo project"),Object(l.a)("h2",null,"Roles performed:"),Object(l.a)("ul",null,Object(l.a)("li",null,"User experience researcher"),Object(l.a)("li",null,"User interface designer")),Object(l.a)("h2",null,"Tools used"),Object(l.a)("ul",null,Object(l.a)("li",null,"Figma"),Object(l.a)("li",null,"Miro"),Object(l.a)("li",null,"Paper prototyping")),Object(l.a)("h1",null,Object(l.a)("a",{id:"executivesummary"}),"Executive summary"),Object(l.a)("p",null,"Winged aims to provide a minimalistic interface for users with hand and arm impairement to draw with minimal pain and discomfort"),Object(l.a)("h1",null,"Problem statement"),Object(l.a)("p",null,"Disabilities have long had negative influence on adults emotionally and physically"),Object(l.a)("p",null,"There are a lot of disabled artists out there who want to be able to draw. However, most of them use other parts of their bodies (such as their mouths and legs), which will greatly cause pain and discomfort."),Object(l.a)("p",null,"Based on the concept of art therapy, art is a means for users to feel the freedom to express themselves and create something new. It is especially helpful when users are bound by illnesses and feel less in control of their health."," "),Object(l.a)("p",null,"“Art provides unlimited possibilities for personal, academic, and professional success.” -"," ",Object(l.a)("a",{href:"https://www.christopherreeve.org/living-with-paralysis/health/staying-active/art-and-creativity"},Object(l.a)("u",null,"Christopher and Diana Reeve Foundation. ")),"Winged promotes inclusivity in the arts and help artists achieve their goals, either for leisure or serious career pursuit"),Object(l.a)(i.a,{fileName:"disabledartists.png",style:{width:"100%"},alt:"Image of disabled artists in the news"}),Object(l.a)("div",{className:"tinyText"},"Disabled Artists in the News"),Object(l.a)("div",{className:"tinyText"},"Source: ",Object(l.a)("a",{href:"https://mfpausa.com/"}),"Mouth and Foot Painting Artists"),Object(l.a)("h1",null,"Audience"),Object(l.a)("p",null,"Our audience are ",Object(l.a)("b",null,"those with arm or hand disabilities"),", unlimited in age or gender"),Object(l.a)("p",null,"Our user testing participants, however, are my friends and acquaintances, who have little to no hand and arm disabilities. I'm working on reaching out to more users in the target audience, so if you happen to know someone or have any recommendation in doing so, please do not hesitate to contact me at trang.le@berkeley.edu. I'd really appreciate it!"),Object(l.a)("h1",null,"Challenges and How Might We (HMWs)"),Object(l.a)("p",null,"There has been"," ",Object(l.a)("a",{href:"http://chris-creed.com/papers/creed-assets14-tools%20-for-disabled-artists.pdf"},Object(l.a)("u",null,"research"))," ","on a software that utilizes the ",Object(l.a)("b",null,"leap motion controller "),"to enable users to draw using hand gestures in midair (researched on by Dr. Chris Creed at University of Birmingham), but the interface in the app was too complicated for users to navigate."),Object(l.a)("h2",null,"Winged's main challenge is to create an interface that is easy for navigate for different physiological needs."),Object(l.a)("ol",null,Object(l.a)("li",null,"HMW help the users navigate the interface with minimal discomfort and muscle pain?"),Object(l.a)("li",null,"HMW create the user interface (UI) as minimalistic as possible?"),Object(l.a)("li",null,"HMW make the options and the icons easier to click?"),Object(l.a)("li",null,"HMW move the canvas to adjust to the users’ hand placement?"),Object(l.a)("li",null,"HMW create independence for the users when they use our app?"),Object(l.a)("li",null,"HMW help users boost their creativity, and more importantly, their self-esteem?")),Object(l.a)("p",null,"In this case study, I will propose a solution for HMWs 1-4, and leave 5) and 6) for further research and future iterations"),Object(l.a)("h2",null,"Similar to Dr. Creed's research, we utilize the leap motion controller as a tool for users to draw."),Object(l.a)(i.a,{fileName:"leapmotionsdk.png",style:{position:"relative"},"object-fit":"none",alt:"The leap motion controller visualization"}),Object(l.a)("div",{class:"tinyText"},"The leap motion controller"),Object(l.a)("div",{class:"tinyText"},"Source: https://www.ultraleap.com/tracking/"),Object(l.a)("h1",null,"Approach"),Object(l.a)("p",null,"Our approach to addressing the HMWs are ",Object(l.a)("b",null,"hand detection"),","," ",Object(l.a)("b",null,"recommending a suitable wheelchair setup,")," ",Object(l.a)("b",null,"voice command"),", and"," ",Object(l.a)("b",null,"a minimalistic design ")," "),Object(l.a)("ul",null,Object(l.a)("li",null,"Minimalist interface"),Object(l.a)("li",null,"Hand gestured detected by the leap motion controller"),Object(l.a)("li",null,"Optimized wheelchair setup of the leap motion controller for each user"),Object(l.a)("li",null,"Detect users’ hand parts to customize to physiological structures"),Object(l.a)("li",null,"Voice command to minimize hand gestures and thus pain")),Object(l.a)("h1",null,"Design Process"),Object(l.a)("h2",null,"User Journey"),Object(l.a)("p",null,"The main pain point we detect from the user journey is when users get used to the app."," ",Object(l.a)("b",null,"Much physical discomfort in the beginning would turn the users away from using the app"),", so we want the onboarding phase goes as smooth and accommodating as possible"),Object(l.a)(i.a,{fileName:"user-journey.png",style:{width:"100%"},alt:""}),Object(l.a)("h2",null,"User flow"),Object(l.a)("p",null,"I created a user flow and identify where we can solve the pain point for users. The highlight of the userflow where the solution takes place is the"," ",Object(l.a)("b",null,"constant feedback loop in which users can go back and forth and adjust the settings suitable to their needs.")),Object(l.a)(i.a,{fileName:"userflow.png",alt:"User flow for the app"}),Object(l.a)("div",{class:"tinyText"},"The highlight of the userflow created in Miro"),Object(l.a)("h2",null,"Wireflow"),Object(l.a)("p",null,"To visualize the interface I want to build, I first created a wireflow to imagine how users would adjust settings. But these questions arise: 1)"," ",Object(l.a)("b",null,"Can we recommend a setting for users during onboarding?")," and 2)"," ",Object(l.a)("b",null,"How do we do so for users with various hand disabilities?")," "),Object(l.a)(i.a,{fileName:"wireflow.png",alt:"User journey for the app"}),Object(l.a)("h2",null,"Arising issues"),Object(l.a)("p",null,"One arising issue I encountered while designing the interface is that"," ",Object(l.a)("b",null,"different hand physiologies will need different accommodations and setups"),". When the users' hands or arms are not exactly the same as the hands with the full number of joints and parts, we would have to consider ways to include them in our app as much as possible."),Object(l.a)(i.a,{fileName:"handphysiology.png",style:{position:"relative"},"object-fit":"none",alt:"Hand structure of a user vs hand with full joints"}),Object(l.a)("div",{class:"tinyText"},"One example of user's hand physiology compared to a hand with full joints"),Object(l.a)(i.a,{fileName:"hand-hierarchy.png",style:{position:"relative"},"object-fit":"none",alt:"Hand hierarchy of leap motion tracker"}),Object(l.a)("div",{class:"tinyText"},"The leap motion hand hierarchy."),Object(l.a)("div",{class:"tinyText"},"Source:"," ",Object(l.a)("a",{href:"https://blog.leapmotion.com/getting-started-leap-motion-sdk/"},"Getting started with the leap motion sdk")),Object(l.a)("p",null,"Another arising issue is ",Object(l.a)("b",null,"how to perform user testing and design iteration"),". As our app is interactive in the 3D space, we cannot simply test it as with a clickable prototype. It is hard for users to imagine how they would interact with the app on the 2D space, and spending too much time coding an interface that is way too elaborate and subject to many drastic changes would cost a lot of time."," "),Object(l.a)("p",null,"Instead of going from wireframe to digital prototyping and then coding, for this app,"," ",Object(l.a)("b",null,"putting each fidelity level into code")," will be necessary to provide"," ",Object(l.a)("b",null,"the most genuine user testing experience.")),Object(l.a)(i.a,{fileName:"interactivity.png",style:{width:"100%"},alt:"Design iteration"}),Object(l.a)("h1",null,"Solutions"),Object(l.a)("h2",null,"1. Recommend the best device setup for users based on their hand structures"),Object(l.a)("p",null,"My proposed solution is that we should have the"," ",Object(l.a)("b",null,"onboarding screens to detect users' hand joints and parts that are ready for drawing.")),Object(l.a)("p",null,"By having the users completing some ",Object(l.a)("b",null,"simple exercises")," (clicking on a button, moving their hands to a designated location), we might be able to detect which parts of their hands users are comfortable with using and moving."),Object(l.a)(i.a,{fileName:"detecthand.png",alt:"Detect hand physiology"}),Object(l.a)("h2",null,"2. Give users freedom to setup the interface at their convenience"),Object(l.a)("p",null,"While doing user testing, I realized that having the buttons placed on users' fingertips are not at all optimal. At first, I only took in consideration users who have paralyzed arms but can still move their fingers. However, this approach, even with this small subset of users, is confusing in and of itself. It was not clear to the participants I tested with that the buttons are on the tip of their fingers. Moreover, this design has a huge flaw, in which it"," ",Object(l.a)("b",null,"does not provide inclusivity for various disabilities.")),Object(l.a)(i.a,{fileName:"button-placement.png",style:{width:"100%"},alt:"Button placement"}),Object(l.a)("p",null,"Many user testing participants commented that it would be easier for them to just use whichever hand or finger they want to click on buttons and navigate the interface. We"," ",Object(l.a)("b",null,"give users freedom to customize the interface and interact with the app at their convenience"),", and still have our recommendation to support them."),Object(l.a)("h2",null,"3. Voice commands for users to set up devices and choose drawing options"),Object(l.a)("p",null,"When users start out using the app, we would not know about users' disabilities and how their hands or arms or structured. To limit this initial bulkiness for users, we could guide them through"," ",Object(l.a)("b",null,"using voice commands during setup")," to let us know about their disabilities and choosing a suitable device."),Object(l.a)(i.a,{fileName:"setup-device.png",style:{width:"100%"},alt:"device setup screen"}),Object(l.a)("p",null,"Not just that,"," ",Object(l.a)("b",null,"voice command also aides users to make drawing options without having to physically click on buttons.")," ","They can tell us which color they want to pick or which brush they would use, not dissimilar to Siri's usage."),Object(l.a)(i.a,{fileName:"voice-command.png",style:{width:"100%"},alt:"drawing with voice command"}),Object(l.a)("h1",{style:{color:"#DB7171"}},"The interface is good. Are we good to go? Not really."),Object(l.a)("h2",null,"4. Suitable wheelchair setup to minimize users' movements"),Object(l.a)("p",null,"To adapt to different users' ergonomic conditions, we need to think about a setup that is adjustable for different disabilities.",Object(l.a)(i.a,{fileName:"touch-wheelchair.png",style:{width:"100%"},alt:"device setup screen"}),'I asked one user (who has no disabilities) that "how would you go about using a drawing app if your right arm is injured by rockclimbing?" (she loves rockclimbing and is righthanded). "I would use my left arm to move the paper around and my right arm to draw, so my injured arm does not have to move around as much," she answered.'),Object(l.a)("p",null,"This answer inspired the fourth solution, which is"," ",Object(l.a)("b",null,"setting up the leap motion controller on a wheelchair at a suitable location"),"."),Object(l.a)(i.a,{fileName:"wheelchair-arm.png",style:{width:"100%"},alt:"device setup screen"}),Object(l.a)(i.a,{fileName:"finger-controller-move.png",style:{width:"100%"},alt:"device setup screen"}),Object(l.a)("p",null,'While playing around with the leap motion controller, I realized that as I moved my controller around with one hand and keep the detected hand still, the detected hand would be moving around on the screen, reflecting the "moving the paper around" idea that our participant gave.'),Object(l.a)("p",null,"Thus, ",Object(l.a)("b",null,"having a wheelchair with the controller attached and moveable at the click of a button")," ","would give users a lot of freedom to make use of the canvas despite limited arm range."),Object(l.a)("p",null,"Users with"," ",Object(l.a)("a",{href:"https://www.hopkinsmedicine.org/health/conditions-and-diseases/arthrogryposis"},Object(l.a)("u",null,"arthrogryposis")),", for example, would have limited arm range movement. ",Object(l.a)("b",null,'"Moving the canvas around instead of the hands"')," is a potential solution for this group of users, and I believe it can benefit users with other conditions and illnesses."),Object(l.a)("p",null,"Luckily, Winged also took into account that users might need to be oriented with this setup when they started using the app."),Object(l.a)("div",{class:"tinyText"},"Six steps to detect users' hand structures"),Object(l.a)(i.a,{fileName:"six-step-setup.png",style:{width:"100%"},alt:"device setup screen"}),Object(l.a)("br",null),Object(l.a)("br",null),Object(l.a)("div",{class:"tinyText"},"Our recommended setup after detecting users' hand structures"),Object(l.a)(i.a,{fileName:"recommended-setup.png",style:{width:"100%"},alt:"device setup screen"}),Object(l.a)("p",null,"Here is Winged's approach together with approaches that have been done by various engineers in this effort!"),Object(l.a)("br",null),Object(l.a)("div",{class:"tinyText"},"Winged's approach (top), other approaches from leap motion gallery (bottom) "),Object(l.a)(i.a,{fileName:"wheelchair.png",style:{width:"100%"},alt:"wheelchair setup"}),Object(l.a)("h1",null,"Hardware constraints"),Object(l.a)("p",null,"Shout out to the brilliant hardware engineers who have worked on hover gesture technologies. I would like to be mindful of my design's feasibility with hardware capability, and have noted some constraints:"),Object(l.a)("br",null),Object(l.a)("div",{class:"tinyText"},"Field of View and depth of view illustration for leap motion controller. ",Object(l.a)("a",{href:"https://www.researchgate.net/figure/Hardware-left-and-the-field-of-view-right-of-the-Leap-Motion-Sensor-pictures_fig3_339891094"},"Source: ResearchGate")),Object(l.a)(i.a,{fileName:"fov.png",style:{width:"100%"},alt:"wheelchair setup"}),Object(l.a)("ul",null,Object(l.a)("li",null,"There is a constraint to the field of view (FoV) of the leap motion device. Currently, the FoV of the device is typically 150×120°."),Object(l.a)("li",null,"The constraint for the depth (vertical interaction) is between 10cm to 60cm preferred, up to 80cm maximum")),Object(l.a)("h1",null,"Summary - Takeaways"),Object(l.a)("p",null,"One of the main challenges of the app is to ",Object(l.a)("b",null,"adapt to different disabilities")," to increase inclusivity towards our users."),Object(l.a)("p",null,"Some of the key solutions include: "),Object(l.a)("ul",null,Object(l.a)("li",null,"Experimenting with different different device placements on wheelchair to better suit users' handicap"),Object(l.a)("li",null,"Detect users' hand joints and bone structures to recommend a setting for them"),Object(l.a)("li",null,"Using voice command to minimize hand interactions and smoothen the onboarding process"),Object(l.a)("li",null,"Let users customize button locations in whichever way that is convenient for them")),Object(l.a)("h1",null,"Further work"),Object(l.a)("p",null,"I have identified the following tasks to be done to move this project forward:"),Object(l.a)("ul",null,Object(l.a)("li",null,"As some users suggested, ",Object(l.a)("b",null,"learning from existing assistive technologies")," and gesture settings of different drawing apps will inform us of the settings/interactions that users have been acquainted with"),Object(l.a)("li",null,"Conduct more ",Object(l.a)("b",null,"research into different disabilities")," and physiological structures of those with hand impairement"))))}},oEq0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AnchorLink",{enumerable:!0,get:function(){return i.AnchorLink}});var i=a("F0uZ")},seuo:function(e,t,a){e.exports={container:"winged-module--container--1Kr7n",icon:"winged-module--icon--3JT9M"}},tBDR:function(e,t,a){"use strict";a("q1tI");var i=a("Wbzz"),n=a("9eSz"),o=a.n(n),s=(a("8rnM"),a("AeFk"));t.a=function(e){var t=e.fileName,a=e.alt,n=e.style,l=Object(i.useStaticQuery)("3955117497").allImageSharp.nodes.find((function(e){return e.fluid.originalName===t})).fluid;return Object(s.a)("figure",null,Object(s.a)(o.a,{fluid:l,alt:a,style:n}))}}}]);
//# sourceMappingURL=component---src-pages-winged-js-29e28bbe1057cc09ef36.js.map