/*! kcharts - v1.2 - 2013-10-30 5:44:06 PM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/linechart/theme",function(){var t="{COLOR}",e={"ks-chart-default":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:t},hoverAttr:{stroke:"#fff",r:5,fill:t,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLine:{css:{color:"#ccc"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-analytiks":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{type:"circle",stroke:"{COLOR}",fill:"#fff",r:4,"stroke-width":2},hoverAttr:{type:"circle",stroke:"{COLOR}",fill:"#fff",r:5,"stroke-width":2}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLine:{css:{color:"#ccc"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-rainbow":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{type:"circle",stroke:"#fff",r:4,"stroke-width":1.5,fill:t},hoverAttr:{type:"circle",stroke:"#fff",r:5,fill:t,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLine:{css:{color:"#ccc"}},tip:{css:{border:"1px solid {COLOR}"}}}};return e}),KISSY.add("gallery/kcharts/1.2/linechart/index",function(t,i,n,r,s,a,o,c,l,h,d,f,p){var _,g=t.all,u=t.Event,x="ks-chart-",v=x+"default",m=x+"evtlayout",y="{COLOR}",b=["circle","triangle","rhomb","square"],w=function(t){var e=this;e._cfg=t,e.init()};return t.extend(w,s,{init:function(){var e,i,n=this;if(s.prototype.init.call(n,n._cfg),n.chartType="linechart",n._$ctnNode[0]){var r={themeCls:v,autoRender:!0,comparable:!1,lineType:"straight",colors:[],title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:!0},points:{attr:{type:"circle",stroke:"#fff",r:4,"stroke-width":1.5,fill:y},hoverAttr:{type:"circle",stroke:"#fff",r:5,fill:y,"stroke-width":0}},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:!0,css:{zIndex:10}},yAxis:{isShow:!0,css:{zIndex:10},num:5},xGrids:{isShow:!0,css:{}},yGrids:{isShow:!0,css:{}},areas:{isShow:!1,css:{}},line:{isShow:!0,attr:{"stroke-width":"3px"},hoverAttr:{"stroke-width":"4px"}},pointLine:{isShow:!1,css:{}},legend:{isShow:!1},tip:{isShow:!0,clsName:"",template:"",css:{},offset:{x:0,y:0},boundryDetect:!0}};n._lines={},n._finished=[],v=n._cfg.themeCls||r.themeCls,n._cfg=t.mix(t.mix(r,l[v],h,h,!0),n._cfg,h,h,!0),n.color=_=new a({themeCls:v}),n._cfg.colors.length>0&&_.removeAllColors();for(var o in n._cfg.colors)_.setColor(n._cfg.colors[o]);n.__cfg=n.cloneSeriesConfig(["line","points"]),e=n._points[0],i=Math.round(e&&e[0]&&e[1]&&e[1].x-e[0].x||n.getInnerContainer().width),i&&n.set("area-width",i),n._cfg.autoRender&&n.render(!0)}},cloneSeriesConfig:function(e){var i,n=this,r={},s=t.clone(n._cfg);if(e){for(var a in e)for(var o in n._cfg.series)i=n._cfg.series[o][e[a]]?t.mix(s[e[a]],n._cfg.series[o][e[a]],h,h,!0):n._cfg[e[a]],i&&(r[e[a]]||(r[e[a]]=[]),r[e[a]][o]=i);return r}},drawTitle:function(){var e=this,i=e.htmlPaper,n=v+"-title",r=e._cfg,s=e._innerContainer,a=.6*s.y;r.title.isShow&&""!=r.title.content&&(e._title=i.rect(0,0,e._$ctnNode.width(),a).addClass(n).css(t.mix({"line-height":a+"px"},r.title.css)).html(r.title.content))},drawSubTitle:function(){var e=this,i=e.htmlPaper,n=v+"-subtitle",r=e._cfg,s=e._innerContainer,a=.4*s.y;r.subTitle.isShow&&""!=r.subTitle.content&&(e._subTitle=i.rect(0,.6*s.y,e._$ctnNode.width(),a).addClass(n).css(t.mix({"line-height":a+"px"},r.subTitle.css)).html(r.subTitle.content))},getRealPointsNum:function(t){var e=0;for(var i in t)t[i].x&&t[i].y&&e++;return e},getVisableLineNum:function(){for(var t=this,e=t._cfg,i=e.series.length,n=i,r=0;i>r;r++)0==e.series[r].isShow&&n--;return n},drawLine:function(t,e){var i=this,n=i._points[t];if(n&&n.length){var r=i.getLinePath(n),s=i.paper,a=i.color.getColor(t).DEFAULT,o=i.__cfg.line[t].attr,c=s.path(r).attr(o).attr({stroke:a}),l=i.getVisableLineNum();return i._stocks[t].stocks=i.drawStocks(t,i.processAttr(i._cfg.points.attr,a)),i._finished.push(!0),i._finished.length==l&&e&&e(),c}},getFirstUnEmptyPointIndex:function(t){var e=this,i=e._points[t];for(var n in i)if(!e.isEmptyPoint(i[n]))return n},animateLine:function(e,i){var n,s,a,o,c,l=this,h=[],d=0,p=0,g=l._cfg,u=l.paper,x=l._points[e],v=l._stocks[e].type,m=l.getLinePath(x),y=r.getTotalLength(m),b=(x.length||0,l.getRealPointsNum(x),g.anim?g.anim.duration||500:500),w="easeNone",k=l.get("area-width"),L=t.mix({stroke:_.getColor(e).DEFAULT},g.line.attr),A=l.__cfg.line[e].attr,C=u.path(n).attr(A).attr({stroke:_.getColor(e).DEFAULT});for(var S in l._points[e])h[S]="";return c=l.getFirstUnEmptyPointIndex(e),h[c]=l.drawStock(x[c].x,x[c].y,l.processAttr(g.points.attr,L.stroke),v),o=l.getVisableLineNum(),new f({},{},{duration:b,easing:w,frame:function(){s=arguments[1]*y,n=r.getSubpath(m,p,s),a=r.pathBBox(n),d=Math.floor(1.01*a.width/k)- -c,!h[d]&&x[d]&&(h[d]=l.drawStock(x[d].x,x[d].y,l.processAttr(g.points.attr,L.stroke),v));for(var t in x)d>t&&(h[t]||(h[t]=l.drawStock(x[t].x,x[t].y,l.processAttr(g.points.attr,L.stroke),v)));C&&C.attr({path:n})},endframe:function(){l._stocks[e].stocks=h,l._finished.push(!0),l._finished.length==o&&i&&i()}}),C},getLinePath:function(t){var e=this,i="",n=(e._innerContainer.bl.y,e.getRealPointsNum(t)),r=0;if(!t)return"";if(r=function(){for(var i in t)if(!e.isEmptyPoint(t[i]))return Math.round(i)}(),i+="M"+t[r].x+","+t[r].y,"arc"==e._cfg.lineType&&n>2){i+=" R";for(var s=r+1,n=t.length;n>s;s++)t[s].x&&t[s].y&&(i+=t[s].x+","+t[s].y+" ")}else for(var s=r+1,n=t.length;n>s;s++)t[s].x&&t[s].y&&(i+=" L"+t[s].x+","+t[s].y);return i},drawLines:function(e){var i=this,n=i._cfg,r=b.length;i._lines={},i._stocks={};for(var s in i._points){var a,o=i.getLinePath(i._points[s]),c=_.getColor(s),l=i.processAttr(i._cfg.points.attr,c.DEFAULT),d=i.processAttr(i._cfg.points.hoverAttr,c.HOVER);if(i._stocks[s]={points:i._points[s],color:c,attr:l,hoverAttr:d,type:"auto"==l.type?b[s%r]:l.type},n.anim)try{a=0==n.series[s].isShow?h:i.animateLine(s,e)}catch(f){a=0==n.series[s].isShow?h:i.drawLine(s,e)}else a=0==n.series[s].isShow?h:i.drawLine(s,e);i._lines[s]={line:a,path:o,points:i._points[s],color:c,attr:t.mix({stroke:c.DEFAULT},i._cfg.line.attr),isShow:n.series[s].isShow===!1?!1:!0}}return i._lines},processAttr:function(e,i){var n=t.clone(e);for(var r in n)n[r]&&"string"==typeof n[r]&&(n[r]=n[r].replace(y,i));return n},drawStocks:function(t,e){var i=this,n=[],r=i._points[t],s=i._stocks[t].type;for(var a in r)r[a].x&&r[a].y?n.push(i.drawStock(r[a].x,r[a].y,e,s)):n.push("");return n},drawStock:function(t,e,i,n){var r,s=this,a=s.paper,o=s._cfg.points.attr;if(t&&e){switch(n){case"triangle":r=p.triangle(a,t,e,1.4*o.r);break;case"rhomb":r=p.rhomb(a,t,e,2.4*o.r,2.4*o.r);break;case"square":r=p.rhomb(a,t,e,2.4*o.r,2.4*o.r,45);break;default:r=a.circle(t,e,o.r,i)}return r.attr(o).attr(i),r}return""},drawGridsX:function(){for(var t=this,e=t._points[0],i=function(){var t=e.length,i=[];if(t>1){var n=(e[1].x-e[0].x)/2;i.push({x:e[0].x-n});for(var r in e)i.push({x:e[r].x- -n})}return i}(),n=0,r=i.length;r>n;n++){var s=t.drawGridX(i[n]);t._gridsX.push(s)}return t._gridsX},drawGridX:function(t,e){var i=this,n=i._innerContainer.tl.y,r=i._innerContainer.height,e=e||i._cfg.xGrids.css,s=i.htmlPaper,a=i._cfg.themeCls+"-gridsx";return s.lineY(t.x,n,r).addClass(a).css(i._cfg.xGrids.css)},drawGridY:function(t,e){var i=this,n=i._innerContainer.width,e=e||i._cfg.yGrids.css,r=i.htmlPaper,s=i._cfg.themeCls+"-gridsy";return r.lineX(t.x,t.y,n).addClass(s).css(e)},drawGridsY:function(){for(var t=this,e=t._innerContainer.tl.x,i=t._pointsY,n=0,r=i.length;r>n;n++)t._gridsY[n]={0:t.drawGridY({x:e,y:i[n].y}),num:t.coordNum[n]}},drawAreas:function(){for(var t=this,e=t._innerContainer,i=e.tl.y,n=t._points[0],r=Math.round(n&&n[0]&&n[1]&&n[1].x-n[0].x||e.width),s=Math.round(t._innerContainer.height),a=t.htmlPaper,o=t._cfg.themeCls+"-areas",c=t._cfg.areas.css,l=0,h=n.length;h>l;l++){var d=a.rect(n[l].x-r/2,i,r,s).addClass(o).css(c);t._areas.push(d)}},drawAxisX:function(){var t=this,e=t._innerContainer,i=e.bl,n=e.width,r=t.htmlPaper,s=t._cfg.themeCls+"-axisx";return t._axisX=r.lineX(i.x,i.y,n).addClass(s).css(t._cfg.xAxis.css||{}),t._axisX},drawAxisY:function(){var t=this,e=t._innerContainer,i=e.tl,n=e.height,r=t.htmlPaper,s=t._cfg.themeCls+"-axisy";return t._axisY=r.lineY(i.x,i.y,n).addClass(s).css(t._cfg.yAxis.css||{}),t._axisY},drawLabelsX:function(){var t=this,e=t._cfg.xAxis.text;for(var i in e)t._labelX[i]=t.drawLabelX(i,e[i])},drawLabelsY:function(){var t=this;for(var e in t._pointsY)t._labelY[e]={0:t.drawLabelY(e,t._pointsY[e].number),num:t._pointsY[e].number};return t._labelY},drawLabelX:function(e,i){var r,s=this,a=s.htmlPaper,o=s._pointsX,c=o.length||0,l=s._cfg.themeCls+"-xlabels",d="{{data}}",f="";return c>e?(d=s._cfg.xLabels.template||d,f=t.isFunction(d)?d(e,i):n(d).render({data:i}),r=o[e],r[0]=a.text(r.x,r.y,"<span class="+l+">"+f+"</span>","center").children().css(s._cfg.xLabels.css),r[0]):h},drawLabelY:function(e,i){var r=this,s=r.htmlPaper,a=r._cfg.themeCls+"-ylabels",o="{{data}}",c="";return o=r._cfg.yLabels.template||o,c=t.isFunction(o)?o(e,i):n(o).render({data:i}),c&&s.text(r._pointsY[e].x,r._pointsY[e].y,"<span class="+a+">"+c+"</span>","right","middle").children().css(r._cfg.yLabels.css)},drawPointLine:function(){var t=this,e=t.htmlPaper,i=t._cfg.themeCls+"-pointline",n=t._innerContainer;return t._pointline=e.lineY(0,n.tl.y,n.height).addClass(i).css(t._cfg.pointLine.css).css({display:"none"}),t._pointline},renderTip:function(){var e=this,i=e._cfg,n=e._innerContainer,r=i.tip.boundryDetect?{x:n.tl.x,y:n.tl.y,width:n.width,height:n.height}:{},s=t.mix(i.tip,{rootNode:e._$ctnNode,clsName:i.themeCls,boundry:r},h,h,!0);return e.tip=new d(s),e.tip},renderEvtLayout:function(){var t,e=this,i=e._innerContainer,n=(i.tl.y,e._points[0]),r=n&&n[0]&&n[1]&&n[1].x-n[0].x||i.width,s=i.height,a=e._multiple,c=e._evtEls._areas=[],l=e._evtEls._rects=[];t=e._evtEls.paper?e._evtEls.paper:e._evtEls.paper=new o(e._$ctnNode,{clsName:m,prependTo:!1,width:i.width,height:s,left:i.tl.x,top:i.tl.y,css:{"z-index":20,background:"#fff",filter:"alpha(opacity =1)","-moz-opacity":.01,"-khtml-opacity":.01,opacity:.01}});for(var h=0,d=n.length;d>h;h++)c[h]={x:n[h].x-r/2,y:i.tl.y,width:r,height:s};if(a)for(var h in e._stocks){var f=e._stocks[h],l=[],n=f.points;if(f.stocks){for(var p in n)l[p]={x:n[p].x-r/2,y:n[p].y-5,width:r,height:10};e._evtEls._rects[h]=l}}},clearEvtLayout:function(){var t=this;t._evtEls._areas&&t._evtEls._areas.length&&(t._evtEls._areas=[]),t._evtEls._rects&&t._evtEls._rects.length&&(t._evtEls._rects=[])},renderLegend:function(){var e=this,i=e._cfg.legend,n=i.container&&g(i.container)[0]?g(i.container):e._$ctnNode,r=e._stocks,s=e._innerContainer,a=e.color._colors,o=a.length,l=e._cfg,h=e._cfg.series,d=t.map(h,function(t,e){e%=o;var i={},n=a[e];i.text=t.text,i.DEFAULT=n.DEFAULT,i.HOVER=n.HOVER;var s=r[e].type;return i.icontype="line"+s,i.iconsize=[1,1],i}),f=t.merge({interval:20,iconright:5,showicon:!0},l.legend.globalConfig);return e.legend=new c({container:n,paper:e.paper,bbox:{width:s.width,height:s.height,left:s.x,top:s.y},align:l.legend.align||"bc",offset:l.legend.offset||[0,30],globalConfig:f,config:d}),e.legend.on("click",function(t){var e=t.index,i=(t.text,t.icon,t.el);1!=i.hide?(this.hideLine(e),i.hide=1,i.disable()):(this.showLine(e),i.hide=0,i.enable())},this),e.legend},render:function(e){var i=this,n=i._cfg,s=n.themeCls;i.beforeRender(),e&&i._$ctnNode.html(""),i.paper=r(i._$ctnNode[0],n.width,n.height),i.htmlPaper=new o(i._$ctnNode,{clsName:s}),i.drawTitle(),i.drawSubTitle(),n.tip.isShow&&i.renderTip(),n.areas.isShow&&i.drawAreas(),n.xGrids.isShow&&i.drawGridsX(),n.yGrids.isShow&&i.drawGridsY(),i._cfg.comparable&&i.drawPointLine(),n.xAxis.isShow&&i.drawAxisX(),n.yAxis.isShow&&i.drawAxisY(),n.xLabels.isShow&&i.drawLabelsX(),n.yLabels.isShow&&i.drawLabelsY(),n.anim?i.drawLines(function(){i.renderEvtLayout(),i.bindEvt(),n.legend.isShow&&i.renderLegend(),t.log("finish"),i.afterRender(),i.fix2Resize()}):(i.drawLines(),i.renderEvtLayout(),i.bindEvt(),n.legend.isShow&&i.renderLegend(),i.afterRender(),i.fix2Resize()),t.log(i)},bindEvt:function(){var t=this,e=(t._cfg,t._evtEls);t.curStockIndex=function(){for(var e in t._stocks)if(t._stocks[e].stocks)return e}(),t.curLineIndex=t.getFirstVisibleLineIndex(),u.detach(e.paper.$paper,"mouseleave"),u.on(e.paper.$paper,"mouseleave",function(){t._lines[0].line.attr(t._lines[0].attr),t.tip&&t.tip.hide(),t._pointline&&t._pointline.hide();for(var e in t._stocks)for(var i in t._stocks[e].stocks)t._stocks[e].stocks[i]&&t._stocks[e].stocks[i].attr&&t._stocks[e].stocks[i].attr(t._stocks[e].attr);t.curStockIndex=h,t.paperLeave()}),u.detach(e.paper.$paper,"mousemove"),u.on(e.paper.$paper,"mousemove",function(e){e=t.getOffset(e),t.delegateMouseMove(e)})},delegateMouseMove:function(t){var e=this,i=e.getInnerContainer(),n=e.curStockIndex;for(var r in e._evtEls._areas){var s=e._evtEls._areas[r];if(e.isInSide(t.offsetX+i.x,t.offsetY+i.y,s.x,s.y,s.width,s.height)&&(n===h||n!=r))return e.curStockIndex=r,e.tipHandler(e.curLineIndex,e.curStockIndex),h}for(var r in e._evtEls._rects)for(var a in e._evtEls._rects[r]){var o=e._evtEls._rects[r][a];if(e.isInSide(t.offsetX+i.x,t.offsetY+i.y,o.x,o.y,o.width,o.height)){if(e.curLineIndex===r)return;return e.lineChangeTo(r),e.tipHandler(e.curLineIndex,e.curStockIndex),h}}},tipHandler:function(e,i){var n=this;if(e!==h&&i!==h){var r,a=n.tip,o=n._cfg,c=o.series,l=o.tip.template,d=(a.getInstance(),n._cfg.themeCls+"-areas-hover"),f=n._points[e][i],p=n._lines[e].color.DEFAULT;if(l&&o.tip.isShow&&n.curStockIndex!==h){if(currentPoints=n._points[e],currentStocks=n._stocks[e],currentPoints&&!n.isEmptyPoint(currentPoints[i])&&n._lines[e].isShow){n._pointline&&n._pointline.css({"margin-left":n._pointsX[i].x}).show();for(var _ in n._stocks)for(var g in n._stocks[_].stocks)n._stocks[_].stocks[g]&&n._stocks[_].stocks[g].attr&&n._stocks[_].stocks[g].attr(n._stocks[_].attr);if(n._cfg.comparable)for(var _ in n._stocks)n._stocks[_].stocks&&n._stocks[_].stocks[i]&&n._stocks[_].stocks[i].attr&&n._stocks[_].stocks[i].attr(n._stocks[_].hoverAttr);else currentStocks&&currentStocks.stocks&&currentStocks.stocks[i]&&currentStocks.stocks[i].attr&&currentStocks.stocks[i].attr(currentStocks.hoverAttr);n._areas[i]&&n._areas[i].addClass(d).siblings().removeClass(d)}else{var u=n.getFirstNotEmptyPointsLineIndex(i);u&&n.lineChangeTo(u)}if(n._points[e][i].dataInfo&&n._lines[e].isShow&&n.stockChange(e,i),n._cfg.comparable){var x={datas:{}},v=[];for(var _ in n._points)if(n._stocks[_].stocks&&n._points[_][i].dataInfo){n._points[_][i].dataInfo.color=n._stocks[_].color.DEFAULT;var m=t.merge(n._points[_][i].dataInfo,c[_]);delete m.data,x.datas[_]=m}for(var _ in x.datas)v.push(x.datas[_]);x.datas=s.prototype.arraySort(v,!0,"y"),r=x}else{var r=t.merge(n._points[e][i].dataInfo,c[e]);delete r.data}n.areaChange(i),n.isEmptyPoint(currentPoints[i])||(t.mix(r,{lineindex:e,pointindex:i}),a.fire("setcontent",{data:r}),a.fire("move",{x:f.x,y:f.y,style:n.processAttr(o.tip.css,p)}))}}},getFirstNotEmptyPointsLineIndex:function(t){var e=this;for(var i in e._points)if(!e.isEmptyPoint(e._points[i][t])&&e._lines[i].isShow)return i+"";return""},getFirstVisibleLineIndex:function(){var t=this;for(var e in t._lines)if(t._lines[e].isShow)return e},isEmptyPoint:function(t){return t&&t.dataInfo?!1:!0},hideLine:function(e){var i,n=this,r=500;if(n._lines[e].isShow){n._lines[e].isShow=!1,e==n.curLineIndex&&(n.curLineIndex=n.getFirstVisibleLineIndex()),s.prototype.removeData.call(n,e),n.animateGridsAndLabels(),n._lines[e].line.remove();for(var a in n._stocks){if(e==a){for(var o in n._stocks[e].stocks)n._stocks[e].stocks[o]&&n._stocks[e].stocks[o].remove();delete n._stocks[e].stocks}n._stocks[a].points=n._points[a]}for(var a in n._lines)if(a!=e){var c=n.getLinePath(n._points[a]),l=n._lines[a].path;if(l!=c&&""!=c){n._isAnimating=!0,n._lines[a].line&&n._lines[a].line.stop()&&n._lines[a].line.animate({path:c},r,function(){n._isAnimating=!1}),n._lines[a].path=c;for(var o in n._stocks[a].stocks)n._stocks[a].stocks[o]&&(i=n._stocks[a].stocks[o],i.stop().animate({transform:"T"+(n._stocks[a].points[o].x-n._stocks[a].stocks[o].attr("cx"))+","+(n._stocks[a].points[o].y-n._stocks[a].stocks[o].attr("cy"))},r))}}n.clearEvtLayout(),n.renderEvtLayout(),n.bindEvt(),t.log(n)}},showLine:function(t){var e,i=this,n=500;if(!i._lines[t].isShow){i._lines[t].isShow=!0,i._cfg.series[t].isShow=!0,s.prototype.recoveryData.call(i,t),i.animateGridsAndLabels(),i._lines[t].line=i.drawLine(t);for(var r in i._stocks)i._stocks[r].points=i._points[r];for(var r in i._lines){var a=i.getLinePath(i._points[r]),o=i._lines[r].path;if(o!=a&&i._lines[r].line){i._isAnimating=!0,i._lines[r].line&&i._lines[r].line.stop().animate({path:a},n,function(){i._isAnimating=!1}),i._lines[r].path=a;for(var c in i._stocks[r].stocks)i._stocks[r].stocks[c]&&(e=i._stocks[r].stocks[c],e.stop(),e.animate({transform:"T"+(i._stocks[r].points[c].x-i._stocks[r].stocks[c].attr("cx"))+","+(i._stocks[r].points[c].y-i._stocks[r].stocks[c].attr("cy"))},n))}}i.clearEvtLayout(),i.renderEvtLayout(),i.bindEvt()}},animateGridsAndLabels:function(){if(this._cfg.yLabels.isShow){var t,e,i,n=this,r=(Math.max(n._pointsY.length,n._gridsY.length),n.coordNum);if(r){t=Math.max.apply(null,r),e=Math.min.apply(null,r),i=t/2+e/2;for(var s in n._labelY)n._labelY[s]&&n._labelY[s][0]&&n._labelY[s][0].remove(),n._gridsY[s]&&n._gridsY[s][0]&&n._gridsY[s][0].remove();n.drawGridsY(),n.drawLabelsY()}}},lineChangeTo:function(t){var e=this,i=(e._cfg,e.__cfg.line[t].hoverAttr);if(!e._isAnimating&&e._lines[t].isShow){for(var n in e._stocks)e._stocks[n].points=e._points[n];for(var n in e._lines)n!=t&&e._lines[n].line&&e._lines[n].line.attr(e.__cfg.line[n].attr);e._lines[t].line.remove();for(var n in e._stocks[t].stocks)e._stocks[t].stocks[n]&&e._stocks[t].stocks[n].remove&&e._stocks[t].stocks[n].remove();e._lines[t].line=e.drawLine(t).attr(i);for(var n in e._stocks)for(var r in e._stocks[n].stocks)if(e._stocks[n].stocks[r]){var s=e._stocks[n].stocks[r];s.attr&&s.attr(e._stocks[n].attr)}e.curLineIndex=t}},fix2Resize:function(){var e=this;e._$ctnNode,e._cfg.anim="";var i=t.buffer(function(){e.init()},200);!e.__isFix2Resize&&e.on("resize",function(){e.__isFix2Resize=1,i()})},areaChange:function(t){var e=this;e.fire("areaChange",{index:t})},paperLeave:function(){var t=this;t.fire("paperLeave",t)},stockChange:function(i,n){var r=this,s=r._stocks[i],a=s.stocks&&s.stocks[n];e=t.mix({target:a,currentTarget:a,lineIndex:Math.round(i),stockIndex:Math.round(n)},s.points[n]),r.fire("stockChange",e)},beforeRender:function(){var t=this;t.fire("beforeRender",t)},afterRender:function(){var t=this;t.fire("afterRender",t)},getPaper:function(){return this.htmlPaper},getHtmlPaper:function(){return this.htmlPaper},getRaphaelPaper:function(){return this.paper},clear:function(){this._$ctnNode.html("")}}),w},{requires:["base","gallery/template/1.0/index","gallery/kcharts/1.2/raphael/index","gallery/kcharts/1.2/basechart/index","gallery/kcharts/1.2/tools/color/index","gallery/kcharts/1.2/tools/htmlpaper/index","gallery/kcharts/1.2/legend/index","./theme","gallery/kcharts/1.2/tools/touch/index","gallery/kcharts/1.2/tip/index","gallery/kcharts/1.2/animate/index","gallery/kcharts/1.2/tools/graphtool/index"]});