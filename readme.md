follow the following to get started:

import styles using:
 <link rel="stylesheet" href="./node_modules/js-slideshow/style.css">

 import js using:

 <script src="./node_modules/js-slideshow/index.js"></script>
for using 3 images in the slideshow use: 
<script src="./node_modules/js-slideshow/index3.js"></script>

NOTE: if you use three images in the slideshow, make sure you reduce number images in the html file template below.

 create html file with the following contents(only change img src!!):
<p> &lt;div class="img-cont"&gt;
    &lt;img class="img" src="https://resources.premierleague.com/photos/2021/08/10/331e43df-4467-4795-82ba-255aa6ee2fce/03930_PP_Generic_Mens_Promo-Header_530x400.jpg?width=500&height=333" alt=""&gt;
    &lt;img class="img" src="https://resources.premierleague.com/photos/2021/08/10/331e43df-4467-4795-82ba-255aa6ee2fce/03930_PP_Generic_Mens_Promo-Header_530x400.jpg?width=500&height=333" alt=""&gt;
    &lt;img class="img" src="https://resources.premierleague.com/photos/2021/08/10/331e43df-4467-4795-82ba-255aa6ee2fce/03930_PP_Generic_Mens_Promo-Header_530x400.jpg?width=500&height=333" alt=""&gt;
    &lt;img class="img" src="https://resources.premierleague.com/photos/2021/08/10/331e43df-4467-4795-82ba-255aa6ee2fce/03930_PP_Generic_Mens_Promo-Header_530x400.jpg?width=500&height=333" alt=""&gt;
    &lt;img class="img" src="https://resources.premierleague.com/photos/2021/08/10/331e43df-4467-4795-82ba-255aa6ee2fce/03930_PP_Generic_Mens_Promo-Header_530x400.jpg?width=500&height=333" alt=""&gt;
    &lt;img class="img" src="https://resources.premierleague.com/photos/2021/08/10/331e43df-4467-4795-82ba-255aa6ee2fce/03930_PP_Generic_Mens_Promo-Header_530x400.jpg?width=500&height=333" alt=""&gt;
    &lt;img class="img" src="https://resources.premierleague.com/photos/2021/08/10/331e43df-4467-4795-82ba-255aa6ee2fce/03930_PP_Generic_Mens_Promo-Header_530x400.jpg?width=500&height=333" alt=""&gt;
    &lt;img class="img" src="https://resources.premierleague.com/photos/2021/08/10/331e43df-4467-4795-82ba-255aa6ee2fce/03930_PP_Generic_Mens_Promo-Header_530x400.jpg?width=500&height=333" alt=""&gt;
    &lt;img class="img" src="https://resources.premierleague.com/photos/2021/08/10/331e43df-4467-4795-82ba-255aa6ee2fce/03930_PP_Generic_Mens_Promo-Header_530x400.jpg?width=500&height=333" alt=""&gt;
&lt;/div&gt;
</p>

For customization for example you want to create 6 images slideshow:

-make the html file img tags 6;
-go to index.js find the following lines and delete from celget[7] to celget[9] 

"celget[0].style.transform =  'rotateY(' + 0 + 'deg)'+ 'translateZ'+deg1 ;
 celget[1].style.transform =  'rotateY(' + num + 'deg)'+ 'translateZ'+deg1 ;
 celget[2].style.transform =  'rotateY(' + 2*num + 'deg)'+ 'translateZ'+deg1 ;
 celget[3].style.transform =  'rotateY(' + 3*num + 'deg)'+ 'translateZ'+deg1 ;
 celget[4].style.transform =  'rotateY(' + 4*num + 'deg)'+ 'translateZ'+deg1 ;
 celget[5].style.transform =  'rotateY(' + 5*num + 'deg)'+ 'translateZ'+deg1 ;
 celget[6].style.transform =  'rotateY(' + 6*num + 'deg)'+ 'translateZ'+deg1 ;
 celget[7].style.transform =  'rotateY(' + 7*num + 'deg)'+ 'translateZ'+deg1 ;
 celget[8].style.transform =  'rotateY(' + 8*num + 'deg)'+ 'translateZ'+deg1 ;"

-make a html file with 6 img tags and enjoy!!!

REMEMBER THAT YOU CANNOT USE MORE THAN 9 IMAGES!! But if you want those modify using your knowledge wisely