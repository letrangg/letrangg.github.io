(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1kcP":function(e,t,a){e.exports={container:"watercolor-module--container--zLWUE",icon:"watercolor-module--icon--1UHJY"}},"8rnM":function(e,t,a){},tBDR:function(e,t,a){"use strict";a("q1tI");var i=a("Wbzz"),o=a("9eSz"),r=a.n(o),n=(a("8rnM"),a("AeFk"));t.a=function(e){var t=e.fileName,a=e.alt,o=e.style,l=Object(i.useStaticQuery)("3955117497").allImageSharp.nodes.find((function(e){return e.fluid.originalName===t})).fluid;return Object(n.a)("figure",null,Object(n.a)(r.a,{fluid:l,alt:a,style:o}))}},zgm6:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));a("q1tI");var i=a("1kcP"),o=a.n(i),r=a("Bl7J"),n=a("tBDR"),l=a("AeFk");function s(){return Object(l.a)(r.a,null,Object(l.a)("div",{className:o.a.container},Object(l.a)("h1",null,"Watercolor Simulation"),Object(l.a)("h2",null,"Group project for ",Object(l.a)("a",{href:"https://cs184.eecs.berkeley.edu/sp21"},Object(l.a)("u",null,"Computer Graphics course at UC Berkeley"))),Object(l.a)("p",null,Object(l.a)("a",{href:"https://github.com/trangrei/final-project-artistic-rendering"},Object(l.a)("u",null,"Project GitHub link"))),Object(l.a)("h2",null,"Team members"),Object(l.a)("p",null,"Richard Chen, Dahyun Kim, Trang Le"),Object(l.a)("h2",null,"Role"),Object(l.a)("ul",null,Object(l.a)("li",null,"Wrote the four operations of water simulation and output them into four initial shaders: streaming, velocity and density, boundary, and collision."),Object(l.a)("li",null,"Reference from different papers to compare different approaches."),Object(l.a)("li",null,"Work on version control. Finish the deliverable web page, video and art works for demo of the project.")),Object(l.a)("h1",null,"Watercolor drawing app"),Object(l.a)("h2",null,"Executive Summary"),Object(l.a)("p",null,"Our product, the watercolor simulation drawing app, enables users to draw digitally with life-like watercolor effects as seen in the real world."),Object(l.a)("h2",null,"Problem Statement"),Object(l.a)("p",null,"In popular digital drawing softwares, there are different brush modes such as watercolor or paint. However, these brush modes still look quite 2D. As there is no interaction between the background paper and the brushstroke, the result looks a lot like a 2D rasterized image of a brush stroke on blank paper instead of having the roughness and natural look of traditional materials such as oil, watercolor, and pastels. To address this problem, we created a desktop app that simulates real-life physical interactions between watercolor and paper, to create lifelike paintings with the true physics of the materials. With this software, artists can draw digitally but still have the watercolor experience."),Object(l.a)("p",null,"The question we want to answer is that, what stops software companies from making realistic art softwares? What hinders the most popular drawing softwares from enabling a feature similar to that of a real life painting?"),Object(l.a)("h2",null,"Audience"),Object(l.a)("p",null,"We hope to deliver a full package for any beginner artist wanting to learn the basics of new materials, starting with watercolor painting."),Object(l.a)("h2",null,"Challenges"),Object(l.a)("p",null,"One of the challenges is that the roughness of the material is hard to simulate, and would take up memory and slow down the program. One other thing to consider is that color blending is different in different materials. For paint (assuming the paint has already dried), when we paste in a new color on top of another, it overlays the old color without the two colors being mixed together. Whereas for watercolor and chalk pastel, we cannot override the color once it is pasted onto the layer (and the new color will blend with the old one to create a third color). Below images are examples in which color blending works differently for different materials."),Object(l.a)(n.a,{fileName:"materials.png"}),Object(l.a)(n.a,{fileName:"oil-painting.png"}),Object(l.a)("p",null,"Unexpected issues could include being unable to achieve a satisfactory frame rate, not being able to find information on how to simulate surfaces or surface-medium interactions, [d]slow rendering due to accuracy of the physical behaviour of materials."),Object(l.a)("h2",null,"Approach"),Object(l.a)("p",null,"To solve these problems, we study the ",Object(l.a)("strong",null,"physics of the watercolor when it interacts with a paper surface"),". For this, we would need to look at the constant for material modelling and how the stiffness of the surface may affect the way color is applied to it. Our goal is to create “realistic-looking” art, or realistic simulations of watercolor. Other criteria include real-time rendering capabilities (frame rates 20~30 fps) and high enough resolution for photorealism (720p+) with the ability to zoom in closer. We would measure the quality of our system based on ",Object(l.a)("strong",null,"the response time of each stroke (assuming that we choose the certain size of the canvas to enable good performance)"),", how much does ",Object(l.a)("strong",null,"the stroke interact with the canvas and with each other"),", and how accurate the ",Object(l.a)("strong",null,"color mixture")," will be."),Object(l.a)("h2",null,"Process"),Object(l.a)("p",null,"We structured our project into two parts: the main program & GUI generator, and the per-GPU computation."),Object(l.a)("ul",null,Object(l.a)("li",null,"GUI generator was written using Processing[3], a Java-based tool that lets you write high-level functions in the graphics pipeline such as the initialization part and the draw loop"),Object(l.a)("li",null,"To create watercolor effects, we use per-GPU computations with GLSL shaders. GLSL helps render highly customizable patterns, which is perfect for our purpose to render the pixel-by-pixel chain interactions with the Lattice Boltzman Method (LBM)."),Object(l.a)("li",null,"What is the Lattice Boltzman Method? Good question! In simple terms, it means to simulate how fluid works in physics formulas. The two main behaviors that LBM simulates are streaming and collision (also called relaxation)."),Object(l.a)("li",null,"In our latest version of the app, we ended up modifying many of our original shaders built for the LBM for increased stability as well as better visuals.")),Object(l.a)("h2",null,"Implementation"),Object(l.a)("p",null,"Our project is based on the framework set by ",Object(l.a)("a",{href:"http://oaktrust.library.tamu.edu/bitstream/handle/1969.1/86068/OBrien.pdf?sequence=1"},Object(l.a)("u",null,"“A Framework for Digital Watercolor” by P. Brien",Object(l.a)("sup",null,"[2]"))),", where we divide the watercolor simulation into four parts:"),Object(l.a)("ul",null,Object(l.a)("li",null,"The brush is implemented as a simple discrete sampling of a circle, in which the pixels covered by the circle receives pigment depending on how fast the brush is moving."),Object(l.a)("li",null,"The water simulation is handled by using the modified LBM equations given below.",Object(l.a)(n.a,{fileName:"LBM.png",alt:"equation"}),"The main difference to the original ",Object(l.a)("a",{href:"http://visgraph.cse.ust.hk/MoXi/moxi.pdf"},Object(l.a)("u",null,"LBM’s",Object(l.a)("sup",null,"[1]")))," stream & collide equation is the addition of partial bounce-back during streaming, even when no boundary cells are involved. This is done by introducing a blocking factor at each cell’s distribution functions, which then work to simulate the streaming step being “partially pushed back”. This is done to simulate back-runs and granulation that is characteristic to realistic watercolor movement."),Object(l.a)("li",null,"After the water flow has been simulated, we also have to simulate the actual pigment flow to achieve correct reflectance at different sites. We do this by modeling the paper as 3 layers: the surface layer, the flow layer, and the fixture later. The key idea is that the pigment will flow spatially across cells, as well as flow into different layers of the paper at each cell, dependent on the water distribution functions."),Object(l.a)("li",null,"After the pigment flow is handled, we calculate the reflectance of each cell using the Kubelka-Munk model. The KM model allows us to composite multiple layers of pigment (or color) in the same cell to create a realistic looking color for the overlapping watercolor.")),Object(l.a)("p",null,"Although the main framework of the project is still relatively same as that of Patrick O’ Brien’s, the our methods in executing some of the four main steps in the algorithm differ substantially in some cases. The main reason for the differences was mostly due the insufficient explanations in our reference[2] or the ineffectiveness of the methods described. The details on the differences in some steps of the watercolor simulation is given in the next section."),Object(l.a)("h2",null,"Our modifications"),Object(l.a)("p",null,"The first major area in which our implementation differed from either paper was pigment_Pf.glsl, which handled the deposition of pigment from the surface layer to the flow layer. This was done because the papers’ method was not reliably transferring the pigment, and would often leave pigment stranded in the surface layer even after no water remained to transport it."),Object(l.a)("p",null,"Additionally, we wrote the rest of the code assuming pigment data was in terms of absolute quantity, but it could have been the case that the papers assumed the storage of concentration per unit of water. To fix these issues, we did a slightly simpler formula for computing pigment transfer. Given the fraction of water flowing out of the surface and into the flow layer, we would transfer the same fraction of pigment into the pigment’s flow layer. This made pigment transfer very simple and reliable."),Object(l.a)("p",null,"An additional change made was having a small minimum amount of pigment transferred even in the case of no water flow, but as long as the cell had density and there was pigment to transfer. This was done specifically to counter cases where a cell was saturated with water (as determined by Beta) but had no pigment and therefore could not receive any pigment from the surface layer."),Object(l.a)("p",null,"Another significant difference from the papers was the handling of the blocking factor. Supposedly, the blocking factor is set to the height field of the cell for non-pinned cells. However, we found that the results looked much better if the blocking factors were all kept much lower. To that end, we reduced all blocking factors by a factor of 60, which was arrived at through experimentation."),Object(l.a)("p",null,"The last area that our code could be very different from the ideal model is the brush handling. The papers hardly go into any detail about their implementation, save for using a circular brush and considering pixels fully inside to be under the brush. After trying many methods and refining each iteration, we arrived at a rather complicated shader for the brush. First, it takes the line segment of the current mouse position and the previous mouse position and considers any cell within a threshold distance to be under the brush. This creates a smoother brush and reduces noticeable sampling artifacts. Then, we compute a scaled brush direction, which influences which distribution functions to increase more. The greater the magnitude of the brush vector, the more we increase the corresponding distribution functions. However, no matter the brush vector, we define a minimum amount to increase the distributions by to effect more visible flow in the end result. The surface pigment and water are both increased, with a slight exponential falloff towards the extremities of the brush. A key implementation detail is that none of the values altered by the brush shader are plainly increased. Instead, they are “averaged up” to a certain maximum. This makes the brush application look more even, and eliminates issues with large distribution function values becoming unstable. "),Object(l.a)("p",null,"Various minor edits we made include clamping of values to either ensure they remained non-negative, to ensure they did not grow too large, or to ensure that a minimum value was used. The last two especially are prevalent throughout all the shaders, as a way of controlling values to be within expectations. For example, the pigment deposited onto the fixture layer is clamped to be between 0.003 and less than a percent (depending on various factors) of the total pigment in the flow layer. "),Object(l.a)("p",null,"Debugging was extremely tedious for this project. Not only are all the shaders interdependent, it is very hard to verify intermediate results as our only output is the rendered outcome of the entire pipeline. As a result, trying to pin down the cause of a bug involved lots of manual perturbation to try setting some values to constants, commenting out different blocks of code, writing simplified shaders with easily verifiable behavior to test the other shaders, etc. Essentially, it was one big game of guess and check. Furthermore, the compiler gave very vague error messages, so even syntax errors could take a few minutes to find and solve."),Object(l.a)("p",null,"Lastly, sometimes we would find out that a parameter was off by an order of magnitude or more the entire time, and once we fixed it, things would work but we would need to adjust nearly a dozen other parameters to complement the new value. Adjusting the parameters was especially challenging, as small changes to one of the parameters or the code could warrant hours of testing combinations of the other parameters. We learned that it is not always the case that some complicated method in a paper is correct or that it will produce the best visual results (especially when there are more than 5 hyper parameters involved). In fact, better results in computer graphics can sometimes be achieved by taking shortcuts behind the scenes rather than staying true to the mathematics. In fact, better results in computer graphics can sometimes be achieved by taking shortcuts behind the scenes rather than staying true to the mathematics."),Object(l.a)("h2",null,"Results"),Object(l.a)("p",null),Object(l.a)(n.a,{fileName:"girl-drawing.png",alt:"girl drawing made by the software"}),Object(l.a)("p",null,"Here we showcase some of the results obtained from our application. Some of the notable characteristics of watercolor are shown, such as the way the colors mix, edge darkening, back-runs, and granulation. "),Object(l.a)("p",null,"We also link a ",Object(l.a)("a",{href:"https://youtu.be/P-KfgtcgS0w"},Object(l.a)("u",null,"video"))," that contains drawing demonstration using our application."),Object(l.a)("h2",null,"References"),Object(l.a)("p",null,Object(l.a)("sup",null,"[1]"),Object(l.a)("a",{href:"http://visgraph.cse.ust.hk/MoXi/moxi.pdf"},Object(l.a)("u",null,"N. Chu et. al, MoXi: Real-Time Ink Dispersion in Absorbent Paper"))),Object(l.a)("p",null,Object(l.a)("sup",null,"[2]"),Object(l.a)("a",{href:"http://oaktrust.library.tamu.edu/bitstream/handle/1969.1/86068/OBrien.pdf?sequence=1"},Object(l.a)("u",null,"P. Brien, A Framework for Digital Watercolor"))),Object(l.a)("br",null),Object(l.a)("p",null,"Thanks for visiting our project! Would this app be helpful to you to draw with more real-life effects? Let us know what we should improve on by opening an issue or email me at trang.le@berkeley.edu!")))}}}]);
//# sourceMappingURL=component---src-pages-watercolor-js-44d11a15269de34031de.js.map