//<![CDATA[
class Token {

    constructor(tokenInstance) {
        this.props = tokenInstance;
    }

    render() {
        let message = "";
        if(this.props.allowance > 0) {
            message = "Compound " + this.props.name + " is already enabled";
            window.onConfirm = function() { window.close(); }
        } else {
           message = "Please enable compound " + this.props.name +  " before supplying or withdrawing";
        }
        return`
        <div class="ui container">
          <div class="ui segment">
            <img src="data:image/png;base64,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"/>
            <span><bold><h3>${message}</h3></bold></span>
          </div>
        </div>
`;
    }
}

web3.tokens.dataChanged = (oldTokens, updatedTokens, tokenCardId) => {
    const currentTokenInstance = updatedTokens.currentInstance;
    document.getElementById(tokenCardId).getElementsByClassName("contents")[0].innerHTML = new Token(currentTokenInstance).render()
};
//]]>
