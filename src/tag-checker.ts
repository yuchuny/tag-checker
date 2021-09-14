interface CheckResult {
    expected?: string;
    found?: string;
}

function formatOutput(checkResult?: CheckResult) {
    const correctMessage = "Correctly tagged paragraph";
    return checkResult ? `Expected ${checkResult.expected || "#"} found ${checkResult.found || "#"}` : correctMessage;
}

function doCheckTag(inputText: string): CheckResult | undefined {
    const tagExpression = /<\/?[A-Z]>/;
    const closeSymbal = "/";
    const tagStartSymbal = "<";
    const closeTagStartSymbal = `${tagStartSymbal}${closeSymbal}`;
    const tagList: string[] = [];
    const isOpenTag = (tag: string) => !tag.includes(closeSymbal);
    let checkString = inputText;
    while (true) {
        const matchedResult = checkString.match(tagExpression);
        if (!matchedResult) {
            return tagList.length ? { expected: tagList.pop() } : undefined;
        } else {
            const matchedTag = matchedResult[0];
            const matchedIndex = matchedResult.index!;
            if (isOpenTag(matchedTag)) {
                tagList.push(matchedTag.replace(tagStartSymbal, closeTagStartSymbal));
            } else {
                const closestTag = tagList.pop();
                if (!closestTag) {
                    return { found: matchedTag };
                } else if (closestTag !== matchedTag) {
                    return { expected: closestTag, found: matchedTag };
                }
            }
            checkString = checkString.substr(matchedIndex + matchedTag.length);
        }
    }
}

export function checkTag(inputText: string): string {
    return formatOutput(doCheckTag(inputText));
}
