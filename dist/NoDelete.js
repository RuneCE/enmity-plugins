const{components:l}=window.enmity;l.Alert;const Fe=l.Button;l.FlatList;const ye=l.Image;l.ImageBackground,l.KeyboardAvoidingView,l.Modal,l.Pressable,l.RefreshControl;const we=l.ScrollView;l.SectionList,l.StatusBar,l.StyleSheet,l.Switch;const v=l.Text;l.TextInput,l.TouchableHighlight;const L=l.TouchableOpacity;l.TouchableWithoutFeedback,l.Touchable;const E=l.View;l.VirtualizedList,l.Form,l.FormArrow,l.FormCTA,l.FormCTAButton,l.FormCardSection,l.FormCheckbox;const $=l.FormDivider;l.FormHint,l.FormIcon;const Be=l.FormInput;l.FormLabel,l.FormRadio;const s=l.FormRow,V=l.FormSection;l.FormSelect,l.FormSubLabel;const K=l.FormSwitch;l.FormTernaryCheckBox,l.FormText,l.FormTextColors,l.FormTextSizes;function Re(e){window.enmity.plugins.registerPlugin(e)}const C={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function q(...e){return window.enmity.modules.bulk(...e)}function H(...e){return window.enmity.modules.getByProps(...e)}function Ue(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;function Ae(e){return window.enmity.patcher.create(e)}var ke="NoDelete",Ve="2.3.9",Ge="patch-1.0.10",Ye='Somewhat basic "Message Logger"',Oe=[{name:"Marek (modified by spin)",id:"308440976723148800"}],He="#ff0069",ze="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/NoDelete.js",h={name:ke,version:Ve,build:Ge,description:Ye,authors:Oe,color:He,sourceUrl:ze};const w=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const I=window.enmity.modules.common.Native,n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const _=window.enmity.modules.common.Storage,f=window.enmity.modules.common.Toasts,x=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const fe=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const N=window.enmity.modules.common.Navigation,je=window.enmity.modules.common.NavigationNative,_e=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const G=window.enmity.modules.common.StyleSheet,Xe=window.enmity.modules.common.ColorMap;window.enmity.modules.common.Components,window.enmity.modules.common.Locale;const We=window.enmity.modules.common.Profiles;window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function M(e,t,o){window.enmity.settings.set(e,t,o)}function z(e,t,o){return window.enmity.settings.get(e,t,o)}function j(e,t,o){return window.enmity.settings.getBoolean(e,t,o)}const pe=e=>{let t=0;for(let o in e)t++;return t},Je=e=>{let t=e.split(`
`).map(o=>{if(o!="")return`"${o.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[pe(t)]=`${t[pe(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function ve(){try{let e=await _.getItem("device_list");if(e)return JSON.parse(e);let t=(await fe.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,o=Je(t);await _.setItem("device_list",o);let a=await _.getItem("device_list");return JSON.parse(a)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function Ke(e,t,o){let a=await ve();return`**[${e}] Debug Information**
> **Plugin Version:** ${t}
> **Plugin Build:** ${o.split("-")[1]}
> **Discord Build:** ${I.InfoDictionaryManager.Version} (${I.InfoDictionaryManager.Build})
> **Software Version:** ${I.DCDDeviceManager.systemVersion}
> **Device:** ${a[I.DCDDeviceManager.device]}`}function g(e){return window.enmity.assets.getIDByName(e)}const c={Debug:g("debug"),Retry:g("ic_message_retry"),Failed:g("Small"),Cancel:g("ic_megaphone_nsfw_16px"),Add:g("add_white"),Delete:g("ic_message_delete"),Clear:g("ic_clear_all_24px"),Pencil:g("ic_pencil_24px"),Copy:g("toast_copy_link"),Open:g("ic_leave_stage"),Clipboard:g("pending-alert"),Debug_Command:{Sent:g("ic_application_command_24px"),Clock:g("clock")},Settings:{Toasts:{Context:g("toast_image_saved"),Settings:g("ic_selection_checked_24px")},Share:g("share"),Commands:g("ic_profile_badge_bot_commands"),Debug:g("ic_rulebook_16px")}},X=e=>{f.open({content:`Copied ${e} to clipboard.`,source:c.Clipboard})},{native:Y}=window.enmity;function qe(){Y.reload()}Y.version,Y.build,Y.device,Y.version;const Qe=H("transitionToGuild");async function Ze({manifest:e}){const t=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,o=await(await fe.get(t)).text;let a=o.match(/\d\.\d\.\d+/g),i=o.match(/patch\-\d\.\d\.\d+/g);return!a||!i?be(e.name,e.version):(a=a[0],i=i[0],a!=e.version?Ee(t,a,i.split("-")[1],e,!1):i!=e.build?Ee(t,a,i.split("-")[1],e,!0):be(e.name,e.version))}const Ee=(e,t,o,a,i)=>{const d=i?o:t;x.show({title:"Update found",body:`A newer ${i?"build":"version"} is available for ${a.name}. ${i?`
The version will remain at ${t}, but the build will update to ${o}.`:""}
Would you like to install ${i?`build \`${o}\``:`version \`${t}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>et(e,d,a,i)})},be=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),f.open({content:`${e} is on latest version (${t})`,source:c.Settings.Toasts.Settings})};async function et(e,t,o,a){window.enmity.plugins.installPlugin(e,({data:i})=>{i=="installed_plugin"||i=="overridden_plugin"?x.show({title:`Updated ${o.name}`,body:`Successfully updated to ${a?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{qe()}}):x.show({title:"Error",body:`Something went wrong while updating ${o.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{Qe.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${o.name}%20Update%20Error%3A%20${a?`b${t}`:`v${t}`}`)}})})}async function tt(e){let t=I.DCDDeviceManager.device,o=await ve();t.includes("iPhone")&&(t=t.replace("iPhone",""),t=t.replace(",","."),(parseFloat(t)<10.6&&parseFloat(t)!=10.3||parseFloat(t)==14.6||parseFloat(t)==12.8)&&_.getItem(`__${e.name}_incompatible_dialog__`).then(a=>{a!=null||x.show({title:"Incompatible iPhone",body:`Please note that you're on an${o[I.DCDDeviceManager.device]}.
Some features in ${e.name} may behave in an unexpected manner.`,confirmText:"Don't show again",cancelText:"Close",onConfirm:()=>_.setItem(`__${e.name}_incompatible_dialog__`,"true")})}))}const W=window.enmity.modules.common.Components.General.Animated,[J,nt]=q(C.byProps("transitionToGuild"),C.byProps("setString"));var ot=({manifest:e})=>{const t=G.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25},header:{color:w.ThemeColorMap.HEADER_PRIMARY,fontFamily:w.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:w.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),o=n.useRef(new W.Value(1)).current,a=()=>{W.spring(o,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},i=()=>{W.spring(o,{toValue:1,duration:250,useNativeDriver:!0}).start()},d=()=>{J.openURL("https://spin.rip/")},y={transform:[{scale:o}]};return n.createElement(n.Fragment,null,n.createElement(E,{style:t.container},n.createElement(L,{onPress:d,onPressIn:a,onPressOut:i},n.createElement(W.View,{style:[y]},n.createElement(ye,{style:[t.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),n.createElement(E,{style:t.text_container},n.createElement(L,{onPress:()=>{J.openURL(e.sourceUrl)}},n.createElement(v,{style:[t.main_text,t.header]},e.name," ")),n.createElement(E,{style:{flexDirection:"row"}},n.createElement(v,{style:[t.main_text,t.sub_header]},"A plugin by"),n.createElement(L,{onPress:()=>{J.openURL("https://spin.rip/")}},n.createElement(v,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:w.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),n.createElement(E,{style:{flexDirection:"row"}},n.createElement(v,{style:[t.main_text,t.sub_header]},"Settings page by"),n.createElement(L,{onPress:()=>{J.openURL("https://github.com/acquitelol/")}},n.createElement(v,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:w.Fonts.DISPLAY_BOLD}]},"Acquite <3"))),n.createElement(E,null,n.createElement(L,{style:{flexDirection:"row"},onPress:()=>{nt.setString(`**${e.name}** v${e.version}`),X("plugin name and version")}},n.createElement(v,{style:[t.main_text,t.sub_header]},"Version:"),n.createElement(v,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:w.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[at,Se]=q(C.byProps("transitionToGuild"),C.byProps("setString"));var lt=({manifest:e,settings:t,hasToasts:o,section:a,commands:i})=>{const d=G.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:w.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:w.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}}),[y,b]=n.useState(),[r,S]=n.useState();return n.createElement(n.Fragment,null,n.createElement(we,{onTouchStart:p=>{b(p.nativeEvent.pageX),S(p.nativeEvent.pageY)},onTouchEnd:p=>{y-p.nativeEvent.pageX<-100&&r-p.nativeEvent.pageY<40&&r-p.nativeEvent.pageY>-40&&N.pop()}},n.createElement(ot,{manifest:e}),a,i&&n.createElement(V,{title:"Plugin Commands"},i.map(p=>n.createElement(s,{label:`/${p.name}`,subLabel:p.description,leading:n.createElement(s.Icon,{style:d.icon,source:c.Settings.Commands}),trailing:s.Arrow,onPress:function(){Se.setString(`/${p.name}`),X(`the command ${p.name}`)}}))),n.createElement(V,{title:"Utility"},o&&n.createElement(n.Fragment,null,n.createElement(s,{label:"Initialization Toasts",leading:n.createElement(s.Icon,{style:d.icon,source:c.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:n.createElement(K,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),f.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:c.Settings.Toasts.Settings})}})}),n.createElement($,null)),n.createElement(s,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:n.createElement(s.Icon,{style:d.icon,source:c.Settings.Debug}),trailing:s.Arrow,onPress:async function(){Se.setString(await Ke(e.name,e.version,e.build)),X("plugin debug information")}}),n.createElement($,null),n.createElement(s,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:n.createElement(s.Icon,{style:d.icon,source:c.Delete}),trailing:s.Arrow,onPress:async function(){await _.removeItem("device_list"),f.open({content:"Cleared device list storage.",source:c.Settings.Toasts.Settings})}})),n.createElement(V,{title:"Source"},n.createElement(s,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:n.createElement(s.Icon,{style:d.icon,source:c.Copy}),trailing:s.Arrow,onPress:()=>{Ze({manifest:e})}}),n.createElement($,null),n.createElement(s,{label:"Source",subLabel:`View ${e.name} source code`,leading:n.createElement(s.Icon,{style:d.icon,source:c.Open}),trailing:s.Arrow,onPress:()=>{at.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),n.createElement(s,{style:d.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})))};const De=_e.createStackNavigator(),{ThemeColorMap:P}=Xe;var $e=({name:e="Page",component:t=E,close_button:o={name:"Close",functionality:()=>{N.pop()}}}={})=>{const a=G.createThemedStyleSheet({container:{backgroundColor:P.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:P.BACKGROUND_MOBILE_PRIMARY,color:P.TEXT_NORMAL},header:{backgroundColor:P.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:P.HEADER_PRIMARY},close:{color:P.HEADER_PRIMARY}});return n.createElement(je.NavigationContainer,null,n.createElement(De.Navigator,{initialRouteName:e,style:a.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:a.cardStyle,headerStyle:a.header,headerTitleContainerStyle:a.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},n.createElement(De.Screen,{name:e,component:t,options:{headerTitleStyle:{color:"white"},headerLeft:()=>n.createElement(Fe,{color:a.close.color,title:o.name,onPress:o.functionality}),..._e.TransitionPresets.ModalSlideFromBottomIOS}})))};const[it,rt]=q(C.byProps("setString"),C.byProps("fetchProfile")),st=Ue("StaticSearchBarContainer");var xe=()=>{const e=G.createThemedStyleSheet({main_text:{opacity:.975,letterSpacing:.25},item_container:{display:"flex",flexDirection:"row",alignItems:"center",paddingTop:4,paddingBottom:4,width:"100%"},author_name:{color:w.ThemeColorMap.HEADER_PRIMARY,fontFamily:w.Fonts.DISPLAY_BOLD,fontSize:18,letterSpacing:.25,paddingBottom:4},log_header:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",maxWidth:"95%"},log_sub_header:{display:"flex",flexDirection:"row",alignItems:"center",maxWidth:"50%"},log_time:{color:w.ThemeColorMap.TEXT_MUTED,opacity:.99,fontSize:13,paddingLeft:4},log_type:{color:w.ThemeColorMap.TEXT_MUTED,opacity:.45,fontSize:16,marginLeft:"auto"},author_avatar:{width:40,height:40,borderRadius:100,justifySelf:"start",alignSelf:"start"},old_message:{color:w.ThemeColorMap.TEXT_MUTED,opacity:.89,fontSize:17},message_content:{color:w.ThemeColorMap.TEXT_NORMAL,opacity:.985,fontSize:17},main_container:{paddingLeft:8,paddingRight:4,paddingTop:2,paddingBottom:16,width:"95%"},text_container:{display:"flex",flexDirection:"column",paddingBottom:4,paddingLeft:8,width:"95%"}}),t=(r,S)=>r.length>S?r.substring(0,S)+"...":r,o=()=>{_.setItem("NoDeleteLogs","[]"),_.getItem("NoDeleteLogs").then(r=>{r=="[]"?x.show({title:"Logs Cleared",body:"NoDelete message logs have been cleared",confirmText:"Close logs",cancelText:"Cancel",onConfirm:()=>N.pop()}):x.show({title:"Error clearing logs",body:"NoDelete logs could not be cleared. Try again or report this issues to spin.",confirmText:"Close logs",cancelText:"Cancel",onConfirm:()=>N.pop()})})},a=z("_nodelete","maxLogs","1000"),[i,d]=n.useState([]),[y,b]=n.useState([]);return n.useEffect(()=>{_.getItem("NoDeleteLogs").then(r=>{let S=JSON.parse(r);d(S.reverse())})},[]),i.length>parseInt(a)&&(j("_nodelete","autoClear",!1)==!1?x.show({title:`Logs have exceeded ${t(a,12)}`,body:`NoDelete logs have exceeded your limit of ${t(a,12)}${parseInt(a)>1e3?`
You may experience performance issues or a laggy log page UI. Clear your logs to fix this issue.`:""}`,confirmText:"Clear logs",cancelText:"Close",onConfirm:()=>o()}):(o(),_.getItem("NoDeleteLogs").then(r=>{r==="[]"?f.open({content:`Auto-cleared ${t(i.length,10)} logs.`,source:c.Settings.Toasts.Settings}):f.open({content:"NoDelete logs could not be cleared. Try again or report this issues to spin.",source:c.Failed})}))),n.createElement(n.Fragment,null,n.createElement(st,{placeholder:"Search Logs",onChangeText:r=>b(r)}),n.createElement(s,{label:"Clear all NoDelete message logs",trailing:s.Arrow,onPress:()=>o()}),n.createElement($,null),n.createElement(we,null,n.createElement(E,{style:e.main_container},i.filter(r=>JSON.stringify(r).includes(y)).map(r=>n.createElement(n.Fragment,null,n.createElement(E,{style:e.item_container},n.createElement(ye,{style:[e.author_avatar],source:{uri:r.avatar}}),n.createElement(L,{onPress:()=>{it.setString(`${r.author} (\`${r.id}\`): ${r.content.join(`
`)}`),X("log content")},onLongPress:()=>{rt.fetchProfile(r.id).then(()=>{We.showUserProfile({userId:r.id})}).catch(S=>{f.open({content:"Error while fetching user. Check logs for more info.",source:c.Failed}),console.log("[NoDelete User Fetch Error]",S)})},style:e.text_container},n.createElement(E,{style:e.log_header},n.createElement(E,{style:e.log_sub_header},n.createElement(v,{style:[e.main_text,e.author_name]},r.author),n.createElement(v,{style:[e.main_text,e.log_time]},r.content[0])),n.createElement(v,{style:[e.main_text,e.log_type]},r.type==="edit"?n.createElement(s.Icon,{source:c.Pencil}):n.createElement(s.Icon,{source:c.Delete}))),n.createElement(E,null,r.content.length==3?n.createElement(n.Fragment,null,n.createElement(v,{style:e.old_message},r.content[1]),n.createElement(v,{style:e.message_content},r.content[2])):n.createElement(v,{style:e.message_content},r.content[1])))),n.createElement($,null))))))},Te;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(Te||(Te={}));var Q;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(Q||(Q={}));var Z;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(Z||(Z={}));var Le;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(Le||(Le={}));var Ce;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(Ce||(Ce={}));var Ie;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(Ie||(Ie={}));function ct(e,t,o,a){window.enmity.clyde.sendReply(e,t,o,a)}const mt={id:"logs-command",name:"logs",displayName:"logs",description:"Open the NoDelete message logs page",displayDescription:"Open the NoDelete message logs page",type:Q.Chat,inputType:Z.BuiltInText,execute:async function(e,t){var o;try{N.push($e,{component:xe,name:"NoDelete Message Logs"})}catch(a){console.log("[ NoDelete Error ]",a),ct((o=t==null?void 0:t.channel.id)!=null?o:"0","An error occured while trying to open NoDelete message logs. Check debug logs for more info.")}}},Ne=[mt];async function Me(e,t,o,a,i){if(t.split("#").pop()=="undefined"||o=="undefined"||a=="undefined"||i.original==null)return;const d={type:e,author:t,id:o,avatar:a?`https://cdn.discordapp.com/avatars/${o}/${a}.${a!=null&&a.startsWith("a_")?"gif":"png"}?size=32`:"https://cdn.discordapp.com/embed/avatars/0.png",content:i.edited?[new Date(i.time).toLocaleString(),i.original,i.edited]:[new Date(i.time).toLocaleString(),i.original]};let y=await _.getItem("NoDeleteLogs");y=JSON.parse(y),d!==y[y.length-1]&&(y.push(d),await _.setItem("NoDeleteLogs",JSON.stringify(y)))}const ee=Ae("NoDelete"),dt={...h,patches:[],onStart(){async function e(){await tt(h)}_.getItem("NoDeleteLogs").then(i=>{i==null&&_.setItem("NoDeleteLogs","[]")}).catch(i=>{console.log(`[${h.name} Storage Error]`,i)});let t=0,o=3;const a=()=>{var i,d;let y=j(h.name,`${h.name}-toastEnable`,!1);try{t++;const b=H("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue"),r=H("getMessage","getMessages"),S=H("getChannel","getDMFromUserId");console.log(`${h.name} delayed start attempt ${t}/${o}.`),y&&f.open({content:`[${h.name}] start attempt ${t}/${o}.`,source:c.Debug});for(const D of["MESSAGE_UPDATE","MESSAGE_DELETE"])try{b.dispatch({type:D,message:{}})}catch(u){console.log(`[${h.name} Dispatch Error]`,u)}const p=(i=b._actionHandlers._orderedActionHandlers)==null?void 0:i.MESSAGE_DELETE.find(D=>D.name==="MessageStore"),Pe=(d=b._actionHandlers._orderedActionHandlers)==null?void 0:d.MESSAGE_UPDATE.find(D=>D.name==="MessageStore");ee.before(p,"actionHandler",(D,u)=>{var F,B,R,U,A,k;const m=r.getMessage(u[0].channelId,u[0].id);if(j("_nodelete","_storageLog",!1)==!1&&(u[0]={}),!(m!=null&&m.editedTimestamp)||(m==null?void 0:m.editedTimestamp._isValid)){const O={type:"MESSAGE_UPDATE",message:{...m,edited_timestamp:"invalid_timestamp",content:(m==null?void 0:m.content)+" `[deleted]`",guild_id:(F=S.getChannel(m==null?void 0:m.channel_id))==null?void 0:F.guild_id},log_edit:!1};b.dispatch(O)}Me("delete",`${(B=m==null?void 0:m.author)==null?void 0:B.username}#${(R=m==null?void 0:m.author)==null?void 0:R.discriminator}`,(U=m==null?void 0:m.author)==null?void 0:U.id,(A=m==null?void 0:m.author)==null?void 0:A.avatar,{time:m==null?void 0:m.timestamp,original:(k=m==null?void 0:m.content)==null?void 0:k.replace("`[deleted]`","").trim()})}),ee.before(Pe,"actionHandler",(D,u)=>{var F,B,R,U,A,k,m,O,te,ne,oe,ae,le,ie,re,se,ce,me,de,ue,ge;try{if(u[0].log_edit==!1)return;const T=r.getMessage(u[0].message.channel_id,u[0].message.id);if(!((B=(F=u[0])==null?void 0:F.message)!=null&&B.content))return;try{if(!u[0].edited_timestamp._isValid)return}catch{}const he=u[0].message.content;j("_nodelete","_storageLog",!1)==!1&&(u[0].message.content=(T==null?void 0:T.content)+" `[edited]`\n"+((U=(R=u[0])==null?void 0:R.message)==null?void 0:U.content)),Me("edit",`${(m=(k=(A=u[0])==null?void 0:A.message)==null?void 0:k.author)==null?void 0:m.username}#${(ne=(te=(O=u[0])==null?void 0:O.message)==null?void 0:te.author)==null?void 0:ne.discriminator}`,(le=(ae=(oe=u[0])==null?void 0:oe.message)==null?void 0:ae.author)==null?void 0:le.id,(se=(re=(ie=u[0])==null?void 0:ie.message)==null?void 0:re.author)==null?void 0:se.avatar,{time:(me=(ce=u[0])==null?void 0:ce.message)==null?void 0:me.edited_timestamp,original:(ue=(de=T==null?void 0:T.content)==null?void 0:de.replace(/\`\[edited\]\`/gim,""))==null?void 0:ue.replace("`[deleted]`","").trim(),edited:`${(ge=he==null?void 0:he.replace(/\`\[edited\]\`/gim,""))==null?void 0:ge.replace("`[deleted]`","").trim()}`});return}catch(T){console.log(`[${h.name} Error]`,T)}}),console.log(`${h.name} delayed start successful.`),y&&f.open({content:`[${h.name}] start successful.`,source:c.Settings.Toasts.Settings})}catch(b){console.log(`[${h.name} Plugin Error]`,b),t<o?(console.warn(`${h.name} failed to start. Trying again in ${t}0s.`),y&&f.open({content:`[${h.name}] failed to start trying again in ${t}0s.`,source:c.Failed}),setTimeout(a,t*1e4)):(console.error(`${h.name} failed to start. Giving up.`),f.open({content:`${h.name} failed to start. Giving up.`,source:c.Failed}))}};setTimeout(()=>{e(),a()},300),this.commands=Ne},onStop(){ee.unpatchAll(),this.commands=[]},getSettingsPanel({settings:e}){const t=G.createThemedStyleSheet({icon:{color:w.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:w.ThemeColorMap.TEXT_MUTED}});return n.createElement(lt,{manifest:h,settings:e,hasToasts:!1,section:n.createElement(n.Fragment,null,n.createElement(V,{title:"Message Logs"},n.createElement(s,{label:"View Message Logs",subLabel:"Tap on an item to copy to clipboard. Long press an item to view profile",leading:n.createElement(s.Icon,{style:t.icon,source:c.Settings.Debug}),onPress:()=>{N.push($e,{component:xe,name:"NoDelete Message Logs"})}})),n.createElement($,null),n.createElement(V,{title:"Plugin Settings"},n.createElement(s,{label:"Only log to Storage",subLabel:"Message logs will not show in chat, only in Storage",leading:n.createElement(s.Icon,{source:c.Pencil}),trailing:n.createElement(K,{value:e.getBoolean("_nodelete",!1),onValueChange:()=>{try{e.toggle("_nodelete",!1),e.getBoolean("_nodelete",!1)?M("_nodelete","_storageLog",!0):M("_nodelete","_storageLog",!1),f.open({content:`Storage-only log has been set to: ${z("_nodelete","_storageLog",!1)}.`,source:c.Settings.Toasts.Settings})}catch(o){console.log("[ NoDelete Toggle Error ]",o),f.open({content:"An error has occurred. Check debug logs for more info.",source:c.Failed})}}})}),n.createElement($,null),n.createElement(Be,{value:z("_nodelete","maxLogs","1000"),onChange:o=>/^\d+$/.test(o)?M("_nodelete","maxLogs",o.trim()):M("_nodelete","maxLogs","1000"),title:"Max Logs to Store"}),n.createElement(s,{label:"Auto-clear logs",subLabel:"Message logs will automatically clear after they have exceeded your max logs limit",leading:n.createElement(s.Icon,{source:c.Clear}),trailing:n.createElement(K,{value:e.getBoolean("_nodelete_autoClear",!1),onValueChange:()=>{try{e.toggle("_nodelete_autoClear",!1),e.getBoolean("_nodelete_autoClear",!1)?M("_nodelete","autoClear",!0):M("_nodelete","autoClear",!1),f.open({content:`Logs auto-clearing has been set to: ${z("_nodelete","autoClear",!1)}.`,source:c.Settings.Toasts.Settings})}catch(o){console.log("[ NoDelete Toggle Error ]",o),f.open({content:"An error has occurred. Check debug logs for more info.",source:c.Failed})}}})}))),commands:Ne})}};Re(dt);
