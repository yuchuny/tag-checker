import { checkTag } from "../../src/tag-checker";

describe("Tag Checker", () => {
    describe("Valid Result", () => {
        it.each([
            "",
            "no tag",
            "\\",
            "<A>test</A>",
            "<A><B>test</B></A>",
            "<A><B><B>test</B></B></A><C><c></C>",
            "The following text<C><B>is centred and in boldface</B></C>",
            "<B>This <\\g> is <B>boldface</B> in <<*> a</B> <\\6> <<d>sentence",
        ])("Input: [%s]. Valid", (inputContent: string) => {
            expect(checkTag(inputContent)).toBe("Correctly tagged paragraph");
        });
    });

    describe("Invalid Result", () => {
        it.each([
            ["<A>", "Expected </A> found #"],
            ["<A>< /A>", "Expected </A> found #"],
            ["</A>", "Expected # found </A>"],
            ["< A></A>", "Expected # found </A>"],
            ["<B><C> This should be centred and in boldface, but the tags are wrongly nested </B></C>", "Expected </C> found </B>"],
            ["<B>This should be in boldface, but there is an extra closing tag</B></C>", "Expected # found </C>"],
            ["<B><C>This should be centred and in boldface, but there is a missing closing tag</C>", "Expected </B> found #"],
        ])("Input: [%s]. Result: [%s]", (inputContent: string, result: string) => {
            expect(checkTag(inputContent)).toBe(result);
        });
    });
});
