function addNews(headline, link, text) {
  let news = document.createElement("li");
  news.classList.add("news");
  
  let newsHeadline = document.createElement("h2");
  newsHeadline.classList.add("news-headline");
  newsHeadline.textContent = headline;
  
  let newsLink = document.createElement("a");
  newsLink.classList.add("news-link");
  newsLink.target = "_blank";
  newsLink.href = link;
  newsLink.textContent = link;
  
  let newsText = document.createElement("p");
  newsText.classList.add("news-text");
  newsText.textContent = text;
  
  news.appendChild(newsHeadline);
  news.appendChild(newsLink);
  news.appendChild(newsText);
  
  newsList.appendChild(news);
}