# CIM640 Final Project 

## Possible Ideas

##### 1.Use p5.play to create a digital bird, and  include some animation, mouse interaction. When you click on the cat or the button around it, the bird will make different actions.
##### 2. Use p5.collide2D to make a scene where rain keeps falling. Click the cloud button to change the speed of the rain. Use the custom draw function in p5.play to create a wind. When the wind meet the rain drop, the rain drops change their direction. Add a man with an umbrella walking on the ground. When he walks in the rain, the umbrella opens.
##### 3. Combine p5.sound and p5.particle to draw an active volcano. Use keyboard to change the flow and sound of the volcano.



![idea image](https://github.com/rhondaqian/CIM640/blob/master/Final/idea1.jpg)

## CIM640 Final Project-- A Rain Game
### 1st Code Plan (the user interaction)

 My goal is to create a rain scene with a character wandering the canvas. The user can use two button to start and stop the rain. When it’s raining, the character gets upset. Then the user can choose to send it an umbrella to cheer it up. The umbrella will keep the rains off the character.
 Random small rectangles within a for-loop going down the canvas are drew to emulate raindrops. The length and transparency of drops decrease gradually as they reach the bottom of the canvas. Each drop generates a ripple, which is an ellipse that has an increasing radius, a decreasing transparency and the same X value with the rectangle.
 The character is an image with a certain y value and a mouseX. The umbrella is another image, drops will be deleted from the array using splice() if they reach this image. The draw-rain function and the umbrella function are set as different movements. Users can use mousePressed to set the true or false of these movements.

### First Program Draft
[link to First Program Draft](https://rhondaqian.github.io/CIM640/Final/Raingame_V1/empty-example)


### Final Code Plan

I use four images instead of simple buttons to control the weather and the umbrella. Push() function is used to load image and create the interfaces. 
In the sunny scene, text on the board in the background guides users to find certain images to start and stop the rain. If users click on the cloud in the branches, it starts to rain, and the background and music change. Users can press mouse to pause and play the music. In the rain scene, the character gets upset, and a text instruction appears to guide users to check their mailbox. If they click the mailbox, four random effects will apply to the character. It may get high heel shoes, punk glasses, hand puppets, or an umbrella. Only when it gets an umbrella, it will enjoy the rain. A cat appears on the fences in the rain scene, users can click on it to erase the items they get from the mailbox. If they click the sun hanging on the wires in the background, the rain will stop, and the music change from the rain sound to a light rhythm.

### Second Program Draft
[link to Second Program Draft](https://rhondaqian.github.io/CIM640/Final/Raingame_V2/empty-example)

### Final Version 
[link to Final Projects](https://rhondaqian.github.io/CIM640/Final/Raingame_VFinal/empty-example)