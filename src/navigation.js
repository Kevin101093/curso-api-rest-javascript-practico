window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
  console.log({ location });

  if (location.hash.startsWith('#trends')) {
    trendsPage();
  } else if (location.hash.startsWith('#search=')) {
    searchPage();
  } else if (location.hash.startsWith('#movie=')) {
    movieDetailsPage();
  } else if (location.hash.startsWith('#category=')) {
    categoryPage();
  }else{
    homePage();
}


}

function homePage(){
    console.log('Home!!');
getTrendingMoviesPreview();
getCategoriesPreview();
    
}
function categoryPage(){
    console.log('categories!!');
    
}
function movieDetalliesPage(){
    console.log('Movie!!');
    
}
function movieDetalliesPage(){
    console.log('Movie!!');
}
function searchPage(){
    console.log('Search');
}
function trendsPage(){
    console.log('TRENDS!!');
}
    

