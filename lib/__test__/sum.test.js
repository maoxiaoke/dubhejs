"use strict";

var _sum = _interopRequireDefault(require("../sum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('basic', function () {
  expect((0, _sum["default"])()).toBe(0);
});
test('basic again', function () {
  expect((0, _sum["default"])(1, 2)).toBe(3);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fX3Rlc3RfXy9zdW0udGVzdC50cyJdLCJuYW1lcyI6WyJ0ZXN0IiwiZXhwZWN0IiwidG9CZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUVBQSxJQUFJLENBQUMsT0FBRCxFQUFVLFlBQU07QUFDbEJDLEVBQUFBLE1BQU0sQ0FBQyxzQkFBRCxDQUFOLENBQWNDLElBQWQsQ0FBbUIsQ0FBbkI7QUFDRCxDQUZHLENBQUo7QUFJQUYsSUFBSSxDQUFDLGFBQUQsRUFBZ0IsWUFBTTtBQUN4QkMsRUFBQUEsTUFBTSxDQUFDLHFCQUFJLENBQUosRUFBTyxDQUFQLENBQUQsQ0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsQ0FBdkI7QUFDRCxDQUZHLENBQUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3VtIGZyb20gJy4uL3N1bSdcblxudGVzdCgnYmFzaWMnLCAoKSA9PiB7XG4gIGV4cGVjdChzdW0oKSkudG9CZSgwKVxufSlcblxudGVzdCgnYmFzaWMgYWdhaW4nLCAoKSA9PiB7XG4gIGV4cGVjdChzdW0oMSwgMikpLnRvQmUoMylcbn0pXG4iXX0=