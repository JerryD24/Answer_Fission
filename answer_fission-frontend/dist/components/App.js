import React,{Component}from"/node_modules/react.js";
const _ref=document.createElement("link");
_ref.rel="stylesheet",_ref.href="\\components\\App/styles.css",document.head.appendChild(_ref);
import{BrowserRouter,Switch,Route,Link}from"/node_modules/react-router-dom.js";
import Header from"Header";
import Footer from"Footer";
import DescriptionContainer from"DescriptionContainer";
import OperationContainer from"OperationContainer";
import AskQuestion from"AskQuestion";
import SearchQuestion from"SearchQuestion";
import AddArticle from"AddArticle";
import Question from"Question";
import Profile from"Profile";
import EditQuestion from"EditQuestion";
import ArticleListContainer from"ArticleListContainer";
import Article from"Article";
import EditArticle from"EditArticle";
import WebTeam from"WebTeam";
import{connect}from"/node_modules/react-redux.js";
import{mapStateToProps,mapDispatchToProps}from"../store/mappingHandlers.js";
class App extends Component{
    constructor(props){super(props),
        console.log(this.props)}render(){return React.createElement("div",{className:"App"},
        React.createElement(BrowserRouter,null,React.createElement(Header,null),
        React.createElement(Switch,null,React.createElement(Route,{exact:!0,path:"/"},
        React.createElement(DescriptionContainer,null),
        React.createElement(OperationContainer,null),
        React.createElement("p",{style:{textAlign:"left",paddingBottom:"50px",margin:"0px 10px"}},
        React.createElement("blockQuote",null,"\u201CLet\u2019s be reasonable and add an eighth day to the week that is devoted exclusively to reading.\u201D ",
        React.createElement("br",null),"\u2013 Lena Dunham",
        React.createElement("br",null),
        React.createElement(Link,{to:"/Articles"},
        React.createElement("button",{type:"button",className:"btn add-article-button mb-2 mt-2"},"Read Articles"))))),
        React.createElement(Route,{excat:!0,path:"/Articles"},
        React.createElement(Ar1ticleListContainer,null)),
        React.createElement(Route,{exact:!0,path:"/AskQuestion"},
        React.createElement(AskQuestion,null)),
        React.createElement(Route,{exact:!0,path:"/SearchQuestion"},
        React.createElement(SearchQuestion,null)),
        React.createElement(Route,{exact:!0,path:"/AddArticle"},
        React.createElement(AddArticle,null)),
        React.createElement(Route,{exact:!0,path:"/Question/:questionId",component:Question}),
        React.createElement(Route,{exact:!0,path:"/EditQuestion/:questionId",component:EditQuestion}),
        React.createElement(Route,{exact:!0,path:"/Article/:articleId",component:Article}),
        React.createElement(Route,{exact:!0,path:"/EditArticle/:articleId",component:EditArticle}),
        React.createElement(Route,{exact:!0,path:"/User/:userId",component:Profile}),
        React.createElement(Route,{exact:!0,path:"/webteam"},
        React.createElement(WebTeam,null))),
        React.createElement("div",{className:`message-box ${this.props.messageType}`,hidden:!this.props.showMessage},this.props.message),
        React.createElement(Footer,null)))}}export default connect(mapStateToProps,mapDispatchToProps)(App);