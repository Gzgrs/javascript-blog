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
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

  function generateTitleLinks(){
  /* [DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
  /* [DONE] for each article */
  const articles = document.querySelectorAll(optArticleSelector);
    //console.log(articles);
    let html = '';
    for(let article of articles){
      //console.log(article);
      /* [DONE] get the article id */
      const articleId = article.getAttribute('id');
      //console.log(articleId);
      /* [DONE] find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      //console.log(articleTitle);
      /* [DONE] get the title from the title element */

      /* [DONE] create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      //console.log(linkHTML);
      /* insert link into titleList */
      html = html + linkHTML;
      console.log(html);
    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    console.log(links);
    for(let link of links){
    link.addEventListener('click', titleClickHandler);
    }

  }

  generateTitleLinks();


  function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
   //console.log(findArticles);
  /* START LOOP: for every article: */
  for(let article of articles){

    /* find tags wrapper */
    const tagWrapper = article.querySelector(optArticleTagsSelector);
     //console.log(tagWrapper);
    /* make html variable with empty string */
    let html = '';
    //console.log(html);
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
     console.log('to to', articleTags);

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
     console.log('split', articleTagsArray);

    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
      console.log('to', tag);
      /* generate HTML of the link */
      const htmlTagLink = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      console.log('htmlTagLink', htmlTagLink);
      /* add generated code to html variable */
      html = html + htmlTagLink;
      //console.log(html);
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagWrapper.innerHTML = html;
    console.log('html', html);
    console.log('tagWrapper', tagWrapper);
    const tags = document.querySelectorAll('.tags a');
    for(let tag of tags){
      tag.addEventListener('click', tagClickHandler);
    }
  /* END LOOP: for every article: */
  }
}

generateTags();

  function tagClickHandler(event){
  /* prevent default action for this event */
    event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    //console.log('tag was clicked');
    //console.log(event);
  /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log('href', href);
  /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-','');
    console.log('replace', tag);
  /* find all tag links with class active */
    const activeLinks = document.querySelectorAll('a.active[href^="#tag-"]')
    console.log('activeLinks', activeLinks);
  /* START LOOP: for each active tag link */
      for(let activeLink of activeLinks){
        console.log('loop', activeLink);
  /* remove class active */
       activeLink.classList.remove('active');
       console.log('remove class active', activeLink);
  /* END LOOP: for each active tag link */
      }
  /* find all tag links with "href" attribute equal to the "href" constant */
    const tagLinksHref = document.querySelectorAll('a[href="' + href + '"]')
      console.log('tagLinksHref', tagLinksHref);
  /* START LOOP: for each found tag link */
    for(let tagLinkHref of tagLinksHref){
    /* add class active */
    tagLinkHref.classList.add('active');
    console.log('tagLinkHref', tagLinkHref);
  /* END LOOP: for each found tag link */
   }

  /* execute function "generateTitleLinks" with article selector as argument */
  }

  function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
  }

  addClickListenersToTags();
