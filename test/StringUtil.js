const StringUtil = artifacts.require('MockStringUtil');

let stringUtil

contract('StringUtil', async () => {

  before(async () => {
    stringUtil = await StringUtil.deployed();
  });

  describe("toHash", () => {
    it("should convert a string to its hash", async() => {
      const hash = await stringUtil.toHash('test');

      assert.strictEqual(hash, '0x05294e8f4a5ee627df181a607a6376b9d98fab962d53722cd6871cf8321cedf6', 'String was not converted correctly to its hash')
    });
  });

  describe("isEmpty", () => {
    it("should revert true for an empty string", async() => {
      const isEmpty = await stringUtil.isEmpty('');

      assert.isTrue(isEmpty, 'Does not return true for an empty string')
    });

    it("should revert false for a non-empty string", async() => {
      const isEmpty = await stringUtil.isEmpty('test');

      assert.isFalse(isEmpty, 'Does not return false for a non-empty string')
    });
  });
});
