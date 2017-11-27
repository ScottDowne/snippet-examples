/*
<script type="text/javascript">
 //<![CDATA[
 (function() {

 })();
 //]]>
</script>*/

class NetNeutrality extends React.Component {
  componentDidMount() {
    var snippet = document.getElementById('snippet');

    var commentsContainer = document.querySelector(".comments-container");
    var brandLogo = document.querySelector("#brandLogo");
    var commentsBackground = document.querySelector(".comments-background");
    var commentsTransitionContainer = document.querySelector(".comments-transition-container");

    commentsContainer.parentNode.removeChild(commentsContainer);
    brandLogo.parentNode.insertBefore(commentsContainer, brandLogo.nextSibling);
    var commentsHeight = commentsContainer.querySelector(".comments-height").clientHeight;
    commentsContainer.style.height = commentsHeight + "px";
    commentsContainer.style.marginTop = "-66px";
    commentsContainer.style.marginBottom = "16px";
    commentsBackground.style.opacity = "1";

    function selectItem(item, index) {
     var current = document.querySelector(".display");
     if (current) {
       current.classList.remove("display");
     }
     commentsTransitionContainer.style.marginLeft = "-" + (commentsTransitionContainer.clientWidth * index) + "px";
     item.classList.add("display");
    }

    var allCommentContainers = document.querySelectorAll(".comment-container");
    var numOfCommentContainers = allCommentContainers.length;
    var selected = Math.floor(Math.random() * numOfCommentContainers);
    [].forEach.call(allCommentContainers, function(commentContainer, index) {
     if (index === selected) {
       selectItem(commentContainer, index);
     }
     var leftArrow = document.createElement("div");
     leftArrow.classList.add("left-arrow");
     if (index !== 0) {
       commentContainer.appendChild(leftArrow);
       leftArrow.addEventListener("click", function() {
         selectItem(allCommentContainers[index-1], index-1);
       });
     }
     var rightArrow = document.createElement("div");
     rightArrow.classList.add("right-arrow");
     if (index !== numOfCommentContainers-1) {
       commentContainer.appendChild(rightArrow);
       rightArrow.addEventListener("click", function() {
         selectItem(allCommentContainers[index+1], index+1);
       });
     }
    });
    setTimeout(function() {
     commentsTransitionContainer.classList.add("ready");
    });
  }
  render() {
    return (
      <Snippet>
        <div className="snippet" id="snippet">
          <div className="comments-container">
            <div className="comments-height">
              <div className="comments-background">
                <div className="center-container">
                  <button className="block-snippet-button" title="Remove this"></button>
                  <div className="comments-transition-container">

                    {/* Free Speech */}
                    <div className="comment-container">
                      <div className="comment">Hands off the Internet.<br/>Free speech can only exist if the<br/>net remains neutral.</div>
                      <div className="author">
                        Concerned Internet Citizen, San Francisco CA
                      </div>
                    </div>

                    <div className="comment-container">
                      <div className="comment">I served to preserve freedom of the<br/>press and freedom of speech and<br/>that is what the internet is today!</div>
                      <div className="author">
                        Concerned Internet Citizen, Aston PA
                      </div>
                    </div>

                    <div className="comment-container">
                      <div className="comment">Without Net Neutrality<br/>big companies could censor<br/>people and perspectives online.</div>
                      <div className="author">
                        Concerned Internet Citizen, Malcom IA
                      </div>
                    </div>

                    <div className="comment-container">
                      <div className="comment">Please leave the internet open to<br/>one and all without limitations.<br/>Let the little guys keep their voice.</div>
                      <div className="author">
                        Concerned Internet Citizen, Boxford MA
                      </div>
                    </div>

                    {/* Innovation */}
                    <div className="comment-container">
                      <div className="comment">Without Net Neutrality creators<br/>and entrepreneurs could struggle<br/>to reach new users.</div>
                      <div className="author">
                        Concerned Internet Citizen, Brooklyn, NY
                      </div>
                    </div>

                    <div className="comment-container">
                      <div className="comment">Without Net Neutrality creators<br/>will struggle to overcome the will<br/>of the large cable monopolies.</div>
                      <div className="author">
                        Concerned Internet Citizen, Longmont CO
                      </div>
                    </div>

                    <div className="comment-container">
                      <div className="comment">Please keep Net Neutrality. Small<br/>businesses and innovators need<br/>your protection. Please!</div>
                      <div className="author">
                        Concerned Internet Citizen, Highpoint NC
                      </div>
                    </div>

                    {/* User Choice */}
                    <div className="comment-container">
                      <div className="comment">I prefer to choose what I see and<br/>not have someone else or some<br/>big company do it.</div>
                      <div className="author">
                        Concerned Internet Citizen, Anchorage AK
                      </div>
                    </div>

                    <div className="comment-container">
                      <div className="comment">I want a fair choice for where I go<br/>online and not to be thwarted in<br/>my options by load times.</div>
                      <div className="author">
                        Concerned Internet Citizen, Charles Town WV
                      </div>
                    </div>

                    <div className="comment-container">
                      <div className="comment">Net Neutrality allows consumers<br/>&#8212;
       not big companies &#8212; to choose<br/>what they do and watch online.</div>
                      <div className="author">
                        Concerned Internet Citizen, Lakeland FL
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>Today is the Internet-wide day of action to save net neutrality. You can help by <a href="http://advocacy.mozilla.org/net-neutrality">leaving a comment to tell the FCC</a> why net neutrality must be protected.</p>
        </div>
      </Snippet>
    );
  }
}
