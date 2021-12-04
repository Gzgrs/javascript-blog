'use strict';

/*document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
});
*/
const titleClickHandler = function(event){

  event.preventDefault();

const clickedElement = this;

  console.log('Link was clicked!');

  console.log(event);
    /* [Done] remove class 'active' from all article links  */
const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){

  activeLink.classList.remove('active');
}
    /* [Done] add class 'active' to the clicked link */
clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);
    /* [DONE] remove class 'active' from all articles */
const activeArticles = document.querySelectorAll('.posts article.active');

for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}
/* [DONE] get 'href' attribute from the clicked link */
const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);
/* [DONE] find the correct article using the selector (value of 'href' attribute) */
const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle)
    /* [DONE] add class 'active' to the correct article */
  targetArticle.classList.add('active');

}



const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){
/* remove contents of titleList */
const titlesOne = document.querySelector(optTitleListSelector);
  console.log(titlesOne);
const titleList = (titlesOne).innerHTML = '';

/* for each article */
const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
for(let article of articles){
  console.log(article);
  article.document.querySelector(optArticleSelector);
}
  /* get the article id */
const articleId = getAttribute('id');
  console.log(articleId);
  /* find the title element */
const articleTitle = article.querySelector(optTitleSelector).innerHTML;
  console.log(articleTitle);
  /* get the title from the title element */

  /* create HTML of the link */
const linkHTML = '<li><a href="#' + articleId + '">' + articleTitle + '<span></span></a></li>';
console.log(linkHTML);
  /* insert link into titleList */
}

generateTitleLinks();



const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
