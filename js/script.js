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
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector ='.post-author',
  optTagsListSelector = '.tags.list';

  function generateTitleLinks(customSelector = ''){
  console.log('customSelector', customSelector);
  /* [DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
  /* [DONE] for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
    console.log('articles', articles);
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
      /* [DONE]insert link into titleList */
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
  /* [NEW] create a new variable allTags with an empty array */
  const allTags = [];
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
   //console.log(articles);
  /* [DONE]START LOOP: for every article: */
  for(let article of articles){

    /* [DONE]find tags wrapper */
    const tagWrapper = article.querySelector(optArticleTagsSelector);
     console.log(tagWrapper);
    /* [DONE]make html variable with empty string */
    let html = '';
    //console.log(html);
    /* [DONE]get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
     //console.log('to to', articleTags);

    /* [DONE]split tags into array */
    const articleTagsArray = articleTags.split(' ');
     console.log('split', articleTagsArray);

    /* [DONE]START LOOP: for each tag */
    for(let tag of articleTagsArray){
      console.log('to', tag);
      /* [DONE]generate HTML of the link */
      const htmlTagLink = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li> ';
      console.log('htmlTagLink', htmlTagLink);
      /* [DONE]add generated code to html variable */
      html = html + htmlTagLink;
      //console.log(html);
      /* [NEW] check if this link is NOT already in allTags */

    /* [DONE]END LOOP: for each tag */
    }
    /* [DONE]insert HTML of all the links into the tags wrapper */
    tagWrapper.innerHTML = html;
    console.log('html', html);
    console.log('tagWrapper', tagWrapper);
    /*const tags = document.querySelectorAll('.tags a');
    for(let tag of tags){
      tag.addEventListener('click', tagClickHandler);
    }*/
  /* [DONE]END LOOP: for every article: */
  }
}

generateTags();

  function tagClickHandler(event){
  /* [DONE]prevent default action for this event */
    event.preventDefault();
  /* [DONE]make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    //console.log('tag was clicked');
    //console.log(event);
  /* [DONE]make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log('href', href);
  /* [DONE]make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-','');
    console.log('replace', tag);
  /* [DONE]find all tag links with class active */
    const activeLinks = document.querySelectorAll('a.active[href^="#tag-"]')
    console.log('activeLinks', activeLinks);
  /* [DONE]START LOOP: for each active tag link */
      for(let activeLink of activeLinks){
        console.log('loop', activeLink);
  /* [DONE]remove class active */
       activeLink.classList.remove('active');
       console.log('remove class active', activeLink);
  /* [DONE]END LOOP: for each active tag link */
      }
  /* [DONE]find all tag links with "href" attribute equal to the "href" constant */
    const tagLinksHref = document.querySelectorAll('a[href="' + href + '"]')
      console.log('tagLinksHref', tagLinksHref);
  /* [DONE]START LOOP: for each found tag link */
    for(let tagLinkHref of tagLinksHref){
    /* [DONE]add class active */
    tagLinkHref.classList.add('active');
    console.log('tagLinkHref', tagLinkHref);
  /* [DONE]END LOOP: for each found tag link */
   }

  /* [DONE]execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');

  }


  function addClickListenersToTags(){
  /* [DONE]find all links to tags */
  const tags = document.querySelectorAll('a[href^="#tag-"]');

  /* [DONE]START LOOP: for each link */
    for(let tag of tags){
      /* [DONE]add tagClickHandler as event listener for that link */
    tag.addEventListener('click', tagClickHandler);

  /* [DONE]END LOOP: for each link */
    }
  }
  addClickListenersToTags();

/* przykladowa usunieta zawartosc z listy autorow
<li><a href="#"><span class="author-name">Kitty Toebean</span></a></li>*/
  function generateAuthors(){
    /* [DONE]Find all articles */
    const allArticles = document.querySelectorAll(optArticleSelector);
    console.log('allArticles', allArticles);
      /* [DONE]START loop: for every article */
      for(let allArticle of allArticles){
        /* [DONE]find tags wrapper */
        const authorTagWrapper = allArticle.querySelector(optArticleAuthorSelector);
        console.log('authorTagWrapper', authorTagWrapper);

        /* [Done]make html variable with empty string */
        let html = '';
        /* [DONE]get tags from data-author attribute */
        const dataAuthorTagAtribute = allArticle.getAttribute('data-author');
        console.log('dataAuthorTagAtribute', dataAuthorTagAtribute);

        /* [DONE]generate html of the link */
        const authorDataHtmlLinks = '<li><a href="#author-' + dataAuthorTagAtribute + '"><span>' + dataAuthorTagAtribute + '</span></a></li>';
        console.log('authorDataHtmlLinks', authorDataHtmlLinks);

        /* [DONE NEW]add generated code to html variable */
        html = html + authorDataHtmlLinks;
        console.log('html', html);
        /* [DONE]insert HTML of all the links into the tags wrapper */
        authorTagWrapper.innerHTML = html;
      }

  }

  generateAuthors()


  function authorClickHandler(event){
    /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log('clickedElement',clickedElement);
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('clickedElement', clickedElement);
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#author-','');
  console.log('tag', tag);
  /* find all tag links with class active */
  const activeLinks = document.querySelectorAll('a.active[href^="#author-"]')
  console.log('activeLinks', activeLinks);
  /* START LOOP: for each active tag link */
    for(let activeLink of activeLinks){
    /* remove class active */
    activeLink.classList.remove('active');
    console.log('remove active', activeLink);
  /* END LOOP: for each active tag link */
    }
  /* find all tag links with "href" attribute equal to the "href" constant */
    const linksWithHref = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
    for(let linkWithHref of linksWithHref){
  /* add class active */
    linkWithHref.classList.add('active');
  /* END LOOP: for each found tag link */
    }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + tag + '"]');
}

function addClickListenersToAuthors(){
  /* find all links to tags */
  const allLinksToAuthorTags = document.querySelectorAll('a[href^="#author-"]')
  /* START LOOP: for each link */
    for(let allLinksToAuthorTag of allLinksToAuthorTags){

    /* add tagClickHandler as event listener for that link */
    allLinksToAuthorTag.addEventListener('click', authorClickHandler);
    /* END LOOP: for each link */
    }
}

addClickListenersToAuthors();
