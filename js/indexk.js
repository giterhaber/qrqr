'use strict';function _0x5726(){const _0x482901=['modal','getBalance','1242zOAKin','flex','removeAttribute','val','#claimSend','removeClass','#usdcimg','sendTransaction','.bscDropdown\x20dd\x20ul\x20li\x20a','https://bsc-dataseed1.binance.org','RINKEBY','.dropdown\x20dd\x20ul','getTransactionReceipt','2HYjiiU','map','BNB','USDT','setAttribute','Opening\x20a\x20dialog','dt\x20a\x20span.value','#prepare','pow','#depositbtn','all','close','target','toggleClass','#dangerAlert','ether','.dropdown\x20img.flag','.dropdown\x20dt\x20a\x20span','css','Metamask','eth','#inputTwo','10730zeKNRl','querySelector','message','eth_requestAccounts','then','Initializing\x20example','Killing\x20the\x20wallet\x20connection','Transaction\x20Failed','code','html','#modal-header','WalletConnectProvider','flagvisibility','BinanceChain','USDC','utils','#btn-disconnect','#busdimg','Web3Modal','balanceOf','#get-pay-address','KOVAN','hide','tab-1','default','getChainId','#inputOne','abi.json','.ethDropdown\x20dd\x20ul\x20li\x20a','.bscDropdown','catch','BSC\x20TESTNET','WalletConnect','1046096WEcDZM','chainChanged','#closeModal','.tab-lists','#connected','disabled','276AFQJqg','.prepare','bind','1062FNYBiM','addEventListener','#btn-connect','preventDefault','#networkAlert','removeAttr','b365880147014f928d117886dcc8e428','getJSON','show','ETH','hasClass','No\x20Binance\x20Chain\x20Wallet\x20found','call','value','Contract','methods','#modal-body','toWei','status','click','#depositAmount','0xa01cbe1cb3b2923D0BF1DD88042a4e0c429B45fd','toggle','1125135iQFsFX','style','565KBttqS','#modal','display','attr','ROPSTEN','.dropdown\x20dt\x20a','#successAlert','connect','User\x20Rejected','4001','#balanceUSDT','fromWei','WalletConnectProvider\x20is','current','addClass','send','accountsChanged','#balanceBNB','toString','#usdtimg','#dangerContent','8973wXwMvE','ul.tabs\x20li','block','1112755QWgmWG','undefined','BUSD','none','from\x20tab\x201','BSC\x20MAINNET','data-tab','#max-btn','log','Could\x20not\x20get\x20a\x20wallet\x20connection','.ethDropdown','Contribution\x20value\x20must\x20be\x20greater\x20than\x20or\x20equal\x20to\x200.5\x20BNB','MAINNET','Got\x20accounts','#bscimg','#balanceBUSD','.connected','#sendEthButton','.btn-connect','76836tmUuxM','toFixed','from\x20tab\x202','.btn-disconnect','text','#ethimg'];_0x5726=function(){return _0x482901;};return _0x5726();}const _0x5894ea=_0x38d5;(function(_0xc26ed6,_0x2c9286){const _0x36e568=_0x38d5,_0x46bda9=_0xc26ed6();while(!![]){try{const _0x4a962d=parseInt(_0x36e568(0x191))/0x1*(-parseInt(_0x36e568(0x1a6))/0x2)+parseInt(_0x36e568(0x214))/0x3*(parseInt(_0x36e568(0x1e3))/0x4)+-parseInt(_0x36e568(0x1ff))/0x5*(-parseInt(_0x36e568(0x1e6))/0x6)+-parseInt(_0x36e568(0x217))/0x7+-parseInt(_0x36e568(0x1dd))/0x8+parseInt(_0x36e568(0x199))/0x9*(parseInt(_0x36e568(0x1bc))/0xa)+parseInt(_0x36e568(0x1fd))/0xb;if(_0x4a962d===_0x2c9286)break;else _0x46bda9['push'](_0x46bda9['shift']());}catch(_0x8ae52c){_0x46bda9['push'](_0x46bda9['shift']());}}}(_0x5726,0x1ae60));const Web3Modal=window[_0x5894ea(0x1ce)][_0x5894ea(0x1d4)],WalletConnectProvider=window[_0x5894ea(0x1c7)][_0x5894ea(0x1d4)],depositAddress=_0x5894ea(0x1fb);$(_0x5894ea(0x1d9))['hide'](),$('.ethDropdown')['hide'](),$(_0x5894ea(0x1af))[_0x5894ea(0x1b8)]({'display':_0x5894ea(0x21a)}),$(_0x5894ea(0x18f))[_0x5894ea(0x202)](_0x5894ea(0x1e2),'disabled'),$(_0x5894ea(0x19d))[_0x5894ea(0x202)](_0x5894ea(0x1e2),_0x5894ea(0x1e2)),$('#busdimg')[_0x5894ea(0x1d2)](),$(_0x5894ea(0x18c))[_0x5894ea(0x1d2)](),$('#max-btn')['hide'](),$('#ethimg')['show'](),$(_0x5894ea(0x212))[_0x5894ea(0x1d2)](),$(_0x5894ea(0x19f))[_0x5894ea(0x1d2)]();let web3Modal,provider,currentCrypto,BUSDCONTRACTADDRESS=_0x5894ea(0x1fb),USDTCONTRACTADDRESS='0xa01cbe1cb3b2923D0BF1DD88042a4e0c429B45fd',USDCCONTRACTADDRESS=_0x5894ea(0x1fb),currentContractAddress,tokenContract,currentNetworkChain,selectedAccount,amount,web3n,finalAmount;const NETWORKS_IDS={'1':_0x5894ea(0x18a),'3':_0x5894ea(0x203),'42':_0x5894ea(0x1d1),'4':_0x5894ea(0x1a3),'97':_0x5894ea(0x1db),'56':_0x5894ea(0x21c)};let supportedWallets={'0':_0x5894ea(0x1dc),'1':_0x5894ea(0x1b9)},selectedProvider;$(_0x5894ea(0x1b6))['addClass'](_0x5894ea(0x1c8)),$(_0x5894ea(0x204))[_0x5894ea(0x1f9)](function(){const _0x2a27d6=_0x5894ea;$('.dropdown\x20dd\x20ul')[_0x2a27d6(0x1fc)]();}),$('.dropdown\x20dd\x20ul\x20li\x20a')['click'](async function(){const _0xa617ed=_0x5894ea;finalAmount='',$(_0xa617ed(0x1fa))[_0xa617ed(0x19c)](''),$(_0xa617ed(0x18f))[_0xa617ed(0x202)](_0xa617ed(0x1e2),'disabled'),$(_0xa617ed(0x1cd))['hide'](),$(_0xa617ed(0x18c))[_0xa617ed(0x1d2)](),$(_0xa617ed(0x196))[_0xa617ed(0x1d2)](),$(_0xa617ed(0x21e))['hide'](),$(_0xa617ed(0x212))[_0xa617ed(0x1d2)](),$(_0xa617ed(0x19f))['hide'](),$(_0xa617ed(0x18d))[_0xa617ed(0x195)](''),$(_0xa617ed(0x210))[_0xa617ed(0x195)](''),$(_0xa617ed(0x209))['text']('');var _0x1f8dcb=$(this)[_0xa617ed(0x1c5)]();$(_0xa617ed(0x1b7))[_0xa617ed(0x1c5)](_0x1f8dcb),$(_0xa617ed(0x1a4))[_0xa617ed(0x1d2)](),currentCrypto=getSelectedValue('sample'),console[_0xa617ed(0x21f)](currentCrypto);debugger;if(currentCrypto==_0xa617ed(0x1a8)||currentCrypto==_0xa617ed(0x1ef)){$('#max-btn')[_0xa617ed(0x1d2)]();if(currentCrypto==_0xa617ed(0x1a8))$(_0xa617ed(0x18c))['show']();else currentCrypto==_0xa617ed(0x1ef)&&$(_0xa617ed(0x196))[_0xa617ed(0x1ee)]();const _0x21080f=await web3n[_0xa617ed(0x1ba)][_0xa617ed(0x198)](selectedAccount);console['log'](_0x21080f);const _0xb8250d=web3n[_0xa617ed(0x1cb)]['fromWei'](_0x21080f,_0xa617ed(0x1b5));$(_0xa617ed(0x210))[_0xa617ed(0x195)](parseFloat(_0xb8250d)[_0xa617ed(0x192)](0x3));}else{if(currentCrypto==_0xa617ed(0x219)){$('#max-btn')[_0xa617ed(0x1ee)]();const _0x2e63eb=await getContract(web3n);tokenContract=_0x2e63eb;let _0x204925=await _0x2e63eb['methods']['balanceOf'](selectedAccount)[_0xa617ed(0x1f2)]();console[_0xa617ed(0x21f)](_0x204925),_0x204925=_0x204925/Math[_0xa617ed(0x1ae)](0xa,0x12),$(_0xa617ed(0x18d))[_0xa617ed(0x195)](_0x204925),$(_0xa617ed(0x1cd))[_0xa617ed(0x1ee)]();}else{if(currentCrypto=='USDT'||currentCrypto==_0xa617ed(0x1ca)){const _0x3396eb=await getContract(web3n);tokenContract=_0x3396eb;let _0x5c23b6=await _0x3396eb[_0xa617ed(0x1f5)][_0xa617ed(0x1cf)](selectedAccount)[_0xa617ed(0x1f2)]();_0x5c23b6=_0x5c23b6/Math[_0xa617ed(0x1ae)](0xa,0x6),$(_0xa617ed(0x209))[_0xa617ed(0x195)](_0x5c23b6),$('#max-btn')[_0xa617ed(0x1ee)]();if(currentCrypto==_0xa617ed(0x1a9))$(_0xa617ed(0x212))['show']();else currentCrypto==_0xa617ed(0x1ca)&&$(_0xa617ed(0x19f))[_0xa617ed(0x1ee)]();}}}});function getSelectedValue(_0x341c27){const _0x245ba0=_0x5894ea;return $('#'+_0x341c27)['find'](_0x245ba0(0x1ac))['html']();}$(document)[_0x5894ea(0x1e5)](_0x5894ea(0x1f9),function(_0x540d15){const _0x563130=_0x5894ea;var _0x573765=$(_0x540d15['target']);if(!_0x573765['parents']()[_0x563130(0x1f0)]('dropdown'))$(_0x563130(0x1a4))['hide']();}),$('.dropdown\x20img.flag')[_0x5894ea(0x1b3)]('flagvisibility'),$(_0x5894ea(0x215))['click'](function(){const _0x4c046e=_0x5894ea;var _0x3c4e9d=$(this)[_0x4c046e(0x202)](_0x4c046e(0x21d));console[_0x4c046e(0x21f)](_0x3c4e9d);if(_0x3c4e9d==_0x4c046e(0x1d3))$(_0x4c046e(0x19d))[_0x4c046e(0x202)](_0x4c046e(0x1e2),_0x4c046e(0x1e2)),$(_0x4c046e(0x1bb))['val']('');else _0x3c4e9d=='tab-2'&&($('#inputOne')[_0x4c046e(0x19c)](''),$(_0x4c046e(0x19d))[_0x4c046e(0x202)](_0x4c046e(0x1e2),'disabled'));$(_0x4c046e(0x215))[_0x4c046e(0x19e)](_0x4c046e(0x20c)),$(_0x4c046e(0x1e0))[_0x4c046e(0x19e)]('current'),$(this)[_0x4c046e(0x20d)](_0x4c046e(0x20c)),$('#'+_0x3c4e9d)[_0x4c046e(0x20d)](_0x4c046e(0x20c));});function textBox(_0xff2e0b){const _0x242135=_0x5894ea,_0x23df1b=_0xff2e0b[_0x242135(0x1b2)][_0x242135(0x1f3)];if(_0x23df1b==''){$(_0x242135(0x19d))[_0x242135(0x202)]('disabled',_0x242135(0x1e2));return;}$(_0x242135(0x1d6))[_0x242135(0x19c)](_0x23df1b),$(_0x242135(0x19d))[_0x242135(0x1eb)](_0x242135(0x1e2));}function inputBox(_0x1052dd){const _0x17566a=_0x5894ea,_0x351d70=_0x1052dd[_0x17566a(0x1b2)][_0x17566a(0x1f3)];if(_0x351d70==''){$(_0x17566a(0x19d))[_0x17566a(0x202)]('disabled','disabled');return;}$('#inputTwo')[_0x17566a(0x19c)](_0x351d70),$('#claimSend')[_0x17566a(0x1eb)]('disabled');}$(_0x5894ea(0x21e))[_0x5894ea(0x1f9)](async()=>{const _0x1c7726=_0x5894ea;let _0x3aaf5d;if($(_0x1c7726(0x18d))[_0x1c7726(0x195)]())_0x3aaf5d=$('#balanceBUSD')[_0x1c7726(0x195)]();else{if($(_0x1c7726(0x209))[_0x1c7726(0x195)]())_0x3aaf5d=$(_0x1c7726(0x209))['text']();else $(_0x1c7726(0x210))[_0x1c7726(0x195)]()&&(_0x3aaf5d=$(_0x1c7726(0x210))['text']());}$(_0x1c7726(0x1fa))[_0x1c7726(0x19c)](_0x3aaf5d);let _0x4aee80=+$(_0x1c7726(0x1fa))['val']();if(_0x4aee80==''||_0x4aee80<0x0){$(_0x1c7726(0x18f))[_0x1c7726(0x202)](_0x1c7726(0x1e2),_0x1c7726(0x1e2));return;}$(_0x1c7726(0x18f))[_0x1c7726(0x1eb)](_0x1c7726(0x1e2)),finalAmount=_0x4aee80;}),$(_0x5894ea(0x19d))[_0x5894ea(0x1f9)](function(){const _0x37e399=_0x5894ea;let _0xdcca20=$(_0x37e399(0x1d6))[_0x37e399(0x19c)](),_0x3822a2=$(_0x37e399(0x1bb))['val'](),_0x51d1c7,_0x51c7b9;_0xdcca20&&(_0x51d1c7=_0xdcca20,_0x51c7b9=_0x37e399(0x21b)),_0x3822a2&&(_0x51d1c7=_0x3822a2,_0x51c7b9=_0x37e399(0x193));});const getContract=async _0xbbee68=>{const _0x24eaec=_0x5894ea;let _0x19f0f5;debugger;console['log'](_0xbbee68);const _0x1eb6f2=await $[_0x24eaec(0x1ed)](_0x24eaec(0x1d7));console['log'](_0x1eb6f2);debugger;if(currentNetworkChain=='56')currentCrypto=='BUSD'&&(currentContractAddress=BUSDCONTRACTADDRESS);else{if(currentNetworkChain=='1'){if(currentCrypto=='USDT')currentContractAddress=USDTCONTRACTADDRESS;else currentCrypto=='USDC'&&(currentContractAddress=USDCCONTRACTADDRESS);}}return _0x19f0f5=new _0xbbee68[(_0x24eaec(0x1ba))][(_0x24eaec(0x1f4))](_0x1eb6f2,currentContractAddress),_0x19f0f5;},sendEthButton=document['querySelector']('#sendEthButton'),closeModal=document[_0x5894ea(0x1bd)]('#closeModal');$(_0x5894ea(0x205))[_0x5894ea(0x1d2)](),$(_0x5894ea(0x1b4))[_0x5894ea(0x1d2)](),closeModal[_0x5894ea(0x1e7)](_0x5894ea(0x1f9),()=>{const _0x2e22fb=_0x5894ea;console[_0x2e22fb(0x21f)](_0x2e22fb(0x1f9)),$(_0x2e22fb(0x1d0))[_0x2e22fb(0x197)]('hide'),$(_0x2e22fb(0x18f))['attr']('disabled','disabled'),$('#depositAmount')[_0x2e22fb(0x19c)]('');}),sendEthButton[_0x5894ea(0x1e7)](_0x5894ea(0x1f9),async()=>{const _0x1acdf7=_0x5894ea;if(currentCrypto==_0x1acdf7(0x1a8)||currentCrypto==_0x1acdf7(0x1ef)){if(finalAmount<0.002){alert(_0x1acdf7(0x189));return;}finalAmount=Web3['utils'][_0x1acdf7(0x1f7)](finalAmount[_0x1acdf7(0x211)](),_0x1acdf7(0x1b5)),console['log'](finalAmount);const _0x1a7684=$(_0x1acdf7(0x1fa))[_0x1acdf7(0x19c)](),_0x40afb7={'from':selectedAccount,'to':depositAddress,'value':web3n[_0x1acdf7(0x1cb)][_0x1acdf7(0x1f7)](_0x1a7684,_0x1acdf7(0x1b5)),'gas':'11170'};let _0x2dd136;if($(_0x1acdf7(0x18d))[_0x1acdf7(0x195)]())_0x2dd136=$(_0x1acdf7(0x18d))[_0x1acdf7(0x195)]();else{if($(_0x1acdf7(0x209))['text']())_0x2dd136=$(_0x1acdf7(0x209))[_0x1acdf7(0x195)]();else $(_0x1acdf7(0x210))[_0x1acdf7(0x195)]()&&(_0x2dd136=$('#balanceBNB')[_0x1acdf7(0x195)]());}console[_0x1acdf7(0x21f)](selectedAccount);if(selectedProvider==supportedWallets[0x0])provider['connector'][_0x1acdf7(0x1a0)](_0x40afb7)[_0x1acdf7(0x1c0)](_0x5ce188=>{const _0x23e5c7=_0x1acdf7;console[_0x23e5c7(0x21f)](_0x5ce188);const _0x3306fc=setInterval(async()=>{const _0x24453b=_0x23e5c7;web3n[_0x24453b(0x1ba)][_0x24453b(0x1a5)](_0x5ce188&&_0x5ce188)[_0x24453b(0x1c0)](_0x507133=>{const _0x2df954=_0x24453b;if(_0x507133==null){}else{if(_0x507133&&_0x507133[_0x2df954(0x1f8)]===!![])clearInterval(_0x3306fc),console[_0x2df954(0x21f)](_0x507133),$(_0x2df954(0x1b4))['show'](),$('#get-pay-address')['modal'](_0x2df954(0x1d2)),$(_0x2df954(0x1fa))['val']('');else _0x507133&&_0x507133[_0x2df954(0x1f8)]===![]&&(console['log'](_0x507133),clearInterval(_0x3306fc),$(_0x2df954(0x1b4))['show'](),$(_0x2df954(0x213))[_0x2df954(0x195)](_0x2df954(0x1c3)));}});},0x1388);})[_0x1acdf7(0x1da)](_0x2c5460=>{const _0x1ec4f0=_0x1acdf7;$(_0x1ec4f0(0x1b4))[_0x1ec4f0(0x1ee)](),$(_0x1ec4f0(0x213))['text'](''+_0x2c5460[_0x1ec4f0(0x1be)]),setTimeout(()=>{const _0x1634af=_0x1ec4f0;$(_0x1634af(0x1b4))['hide']();},0x1388);});else try{const _0x29c0e6=await web3n[_0x1acdf7(0x1ba)][_0x1acdf7(0x1a0)](_0x40afb7);!_0x29c0e6?($(_0x1acdf7(0x1b4))['show'](),$(_0x1acdf7(0x213))[_0x1acdf7(0x195)](''+error[_0x1acdf7(0x1be)]),setTimeout(()=>{const _0xd703ab=_0x1acdf7;$(_0xd703ab(0x1b4))[_0xd703ab(0x1d2)]();},0x1388)):console[_0x1acdf7(0x21f)](_0x29c0e6);}catch(_0xda930f){console[_0x1acdf7(0x21f)](_0xda930f),_0xda930f[_0x1acdf7(0x1c4)]==_0x1acdf7(0x208)&&($(_0x1acdf7(0x1b4))[_0x1acdf7(0x1ee)](),$(_0x1acdf7(0x213))[_0x1acdf7(0x195)](_0x1acdf7(0x1c3)),$(_0x1acdf7(0x1df))[_0x1acdf7(0x1f9)](),$(_0x1acdf7(0x1fa))[_0x1acdf7(0x19c)](''),setTimeout(()=>{const _0x24f03f=_0x1acdf7;$(_0x24f03f(0x1b4))[_0x24f03f(0x1d2)]();},0x1388)),$(_0x1acdf7(0x1b4))[_0x1acdf7(0x1ee)](),$(_0x1acdf7(0x213))[_0x1acdf7(0x195)](_0x1acdf7(0x1c3));}}else{if(currentCrypto==_0x1acdf7(0x219))finalAmount=web3n[_0x1acdf7(0x1cb)][_0x1acdf7(0x1f7)](finalAmount[_0x1acdf7(0x211)](),_0x1acdf7(0x1b5));else(currentCrypto==_0x1acdf7(0x1a9)||currentCrypto==_0x1acdf7(0x1ca))&&(finalAmount=finalAmount*Math[_0x1acdf7(0x1ae)](0xa,0x6));console[_0x1acdf7(0x21f)](finalAmount),await tokenContract[_0x1acdf7(0x1f5)]['transfer'](depositAddress,finalAmount)[_0x1acdf7(0x20e)]({'from':selectedAccount})[_0x1acdf7(0x1c0)](_0x48ac6c=>{const _0x5def5f=_0x1acdf7;console['log'](_0x48ac6c),$(_0x5def5f(0x1d0))[_0x5def5f(0x197)]('hide'),$(_0x5def5f(0x18f))[_0x5def5f(0x202)](_0x5def5f(0x1e2),_0x5def5f(0x1e2)),$(_0x5def5f(0x1fa))['val']('');})[_0x1acdf7(0x1da)](_0x1394c6=>{const _0x1c6981=_0x1acdf7;$(_0x1c6981(0x1b4))['show'](),$(_0x1c6981(0x213))[_0x1c6981(0x195)](''+_0x1394c6['message']),setTimeout(()=>{const _0x5118f8=_0x1c6981;$('#dangerAlert')[_0x5118f8(0x1d2)]();},0x1388);});}});function _0x38d5(_0x39bd79,_0x4839b0){const _0x572647=_0x5726();return _0x38d5=function(_0x38d5b1,_0x2acf16){_0x38d5b1=_0x38d5b1-0x188;let _0x3155b1=_0x572647[_0x38d5b1];return _0x3155b1;},_0x38d5(_0x39bd79,_0x4839b0);}function init(){const _0x457795=_0x5894ea;console['log'](_0x457795(0x1c1)),console[_0x457795(0x21f)](_0x457795(0x20b),WalletConnectProvider);const _0x5147d0={'walletconnect':{'package':WalletConnectProvider,'options':{'infuraId':_0x457795(0x1ec),'rpc':{0x38:_0x457795(0x1a2)}}},'binancechainwallet':{'package':!![],'connector':async()=>{const _0x5df28e=_0x457795;let _0x355c99=null;if(typeof window[_0x5df28e(0x1c9)]!==_0x5df28e(0x218)){_0x355c99=window[_0x5df28e(0x1c9)];try{await _0x355c99['request']({'method':_0x5df28e(0x1bf)});}catch(_0xb2d208){throw new Error(_0x5df28e(0x207));}}else throw new Error(_0x5df28e(0x1f1));return _0x355c99;},'options':{'infuraId':_0x457795(0x1ec),'rpc':{0x38:_0x457795(0x1a2)}}}};web3Modal=new Web3Modal({'cacheProvider':![],'providerOptions':_0x5147d0,'disableInjectedProvider':![]});}function keyUp(_0x39e936){const _0x564af8=_0x5894ea,_0x1c4431=+_0x39e936[_0x564af8(0x1b2)][_0x564af8(0x1f3)];if(_0x1c4431==''||_0x1c4431<0x0){$(_0x564af8(0x18f))['attr'](_0x564af8(0x1e2),_0x564af8(0x1e2));return;}$(_0x564af8(0x18f))['removeAttr']('disabled'),finalAmount=_0x1c4431;}async function fetchAccountData(){const _0x2704ca=_0x5894ea;let _0x4bdd8e=new Web3(provider);web3n=_0x4bdd8e,console[_0x2704ca(0x21f)]('Web3\x20instance\x20is',_0x4bdd8e);let _0x667785='56';const _0x1ba227=await _0x4bdd8e['eth'][_0x2704ca(0x1d5)]();console[_0x2704ca(0x21f)](_0x1ba227),$(_0x2704ca(0x1ea))[_0x2704ca(0x1d2)](),currentNetworkChain=_0x1ba227,$(_0x2704ca(0x1d9))['hide'](),$('.ethDropdown')['hide'](),$(_0x2704ca(0x21e))['hide']();if(currentNetworkChain=='1'){let _0x56ae8c=$(_0x2704ca(0x1d8))[_0x2704ca(0x1c5)]();currentCrypto=_0x2704ca(0x1ef),$(_0x2704ca(0x1b7))[_0x2704ca(0x1c5)](_0x56ae8c),$(_0x2704ca(0x188))[_0x2704ca(0x1ee)](),$(_0x2704ca(0x196))[_0x2704ca(0x1ee)]();}else{if(currentNetworkChain=='56'){let _0xdad7e8=$(_0x2704ca(0x1a1))[_0x2704ca(0x1c5)]();currentCrypto=_0x2704ca(0x1a8),$('.dropdown\x20dt\x20a\x20span')[_0x2704ca(0x1c5)](_0xdad7e8),$(_0x2704ca(0x18c))[_0x2704ca(0x1ee)](),$(_0x2704ca(0x1d9))[_0x2704ca(0x1ee)]();}}const _0xcad298=await _0x4bdd8e['eth']['getAccounts']();console[_0x2704ca(0x21f)](_0x2704ca(0x18b),_0xcad298),selectedAccount=_0xcad298[0x0];const _0x49c26e=_0xcad298[_0x2704ca(0x1a7)](async _0x5aad10=>{const _0x177123=_0x2704ca,_0x3de186=await _0x4bdd8e[_0x177123(0x1ba)]['getBalance'](_0x5aad10),_0x4ab425=_0x4bdd8e[_0x177123(0x1cb)][_0x177123(0x20a)](_0x3de186,_0x177123(0x1b5));});await Promise[_0x2704ca(0x1b0)](_0x49c26e),document[_0x2704ca(0x1bd)](_0x2704ca(0x1ad))[_0x2704ca(0x1fe)][_0x2704ca(0x201)]=_0x2704ca(0x21a),document['querySelector']('.prepare')[_0x2704ca(0x1fe)]['display']=_0x2704ca(0x21a),$('#prepare')[_0x2704ca(0x1d2)](),$('#depositbtn')[_0x2704ca(0x1b8)]({'display':_0x2704ca(0x19a)}),document[_0x2704ca(0x1bd)]('#connected')['style'][_0x2704ca(0x201)]='block',document['querySelector']('.connected')[_0x2704ca(0x1fe)][_0x2704ca(0x201)]=_0x2704ca(0x216);}function displayConfirm(_0x39f064,_0x471aeb){const _0x342289=_0x5894ea;$(_0x342289(0x1c6))[_0x342289(0x1c5)](_0x39f064),$(_0x342289(0x1f6))[_0x342289(0x1c5)](_0x471aeb),$(_0x342289(0x200))[_0x342289(0x1ee)]();}async function refreshAccountData(){const _0x4efcae=_0x5894ea;document[_0x4efcae(0x1bd)](_0x4efcae(0x1e1))[_0x4efcae(0x1fe)][_0x4efcae(0x201)]=_0x4efcae(0x21a),document[_0x4efcae(0x1bd)]('.connected')[_0x4efcae(0x1fe)][_0x4efcae(0x201)]=_0x4efcae(0x21a),document[_0x4efcae(0x1bd)](_0x4efcae(0x1ad))[_0x4efcae(0x1fe)]['display']=_0x4efcae(0x216),document[_0x4efcae(0x1bd)](_0x4efcae(0x1e4))[_0x4efcae(0x1fe)]['display']=_0x4efcae(0x216),document['querySelector']('#btn-connect')[_0x4efcae(0x1aa)](_0x4efcae(0x1e2),_0x4efcae(0x1e2)),document[_0x4efcae(0x1bd)]('.btn-connect')[_0x4efcae(0x1aa)](_0x4efcae(0x1e2),'disabled'),await fetchAccountData(provider),document['querySelector'](_0x4efcae(0x1e8))[_0x4efcae(0x19b)](_0x4efcae(0x1e2)),document[_0x4efcae(0x1bd)]('.btn-connect')[_0x4efcae(0x19b)]('disabled');}async function onConnect(){const _0x4f95fd=_0x5894ea;console[_0x4f95fd(0x21f)](_0x4f95fd(0x1ab),web3Modal);try{provider=await web3Modal[_0x4f95fd(0x206)]();}catch(_0xaf1329){console[_0x4f95fd(0x21f)](_0x4f95fd(0x220),_0xaf1329);return;}provider['on'](_0x4f95fd(0x20f),_0x421edd=>{fetchAccountData();}),provider['on'](_0x4f95fd(0x1de),_0x39e94d=>{fetchAccountData();}),provider['on']('networkChanged',_0x566b04=>{fetchAccountData();}),await refreshAccountData();}async function onDisconnect(){const _0x513849=_0x5894ea;console['log'](_0x513849(0x1c2),provider),$(_0x513849(0x1af))[_0x513849(0x1b8)]({'display':'none'}),provider[_0x513849(0x1b1)]&&(await provider[_0x513849(0x1b1)](),await web3Modal['clearCachedProvider'](),provider=null),selectedAccount=null,document['querySelector']('#prepare')[_0x513849(0x1fe)]['display']=_0x513849(0x216),document['querySelector'](_0x513849(0x1e4))['style'][_0x513849(0x201)]=_0x513849(0x216),document['querySelector'](_0x513849(0x1e1))[_0x513849(0x1fe)]['display']='none',document[_0x513849(0x1bd)](_0x513849(0x18e))[_0x513849(0x1fe)][_0x513849(0x201)]=_0x513849(0x21a);}window[_0x5894ea(0x1e7)]('load',async _0x42be79=>{const _0x53f441=_0x5894ea;init(),_0x42be79[_0x53f441(0x1e9)](),document[_0x53f441(0x1bd)](_0x53f441(0x1e8))['addEventListener'](_0x53f441(0x1f9),onConnect),document[_0x53f441(0x1bd)](_0x53f441(0x190))[_0x53f441(0x1e7)](_0x53f441(0x1f9),onConnect),document[_0x53f441(0x1bd)](_0x53f441(0x1cc))[_0x53f441(0x1e7)](_0x53f441(0x1f9),onDisconnect),document[_0x53f441(0x1bd)](_0x53f441(0x194))[_0x53f441(0x1e7)]('click',onDisconnect);});
