"use strict";
exports.__esModule = true;
exports.SessionEntity = exports.UserEntity = void 0;
var common_1 = require("@nestjs/common");
var UserEntity = /** @class */ (function () {
    function UserEntity(userId, name) {
        this.userId = userId;
        this.name = name;
        this.userId = userId;
        this.name = name;
    }
    UserEntity.Builder = /** @class */ (function () {
        function class_1() {
        }
        class_1.prototype.userId = function (n) {
            if (typeof n !== 'string') {
                throw new common_1.HttpException('userId must be string', common_1.HttpStatus.BAD_REQUEST);
            }
            this._userId = n;
            return this;
        };
        class_1.prototype.name = function (n) {
            if (typeof n !== 'string') {
                throw new common_1.HttpException('userId must be string', common_1.HttpStatus.BAD_REQUEST);
            }
            this._userId = n;
            return this;
        };
        class_1.prototype.build = function () {
            return new UserEntity(this._userId, this._name);
        };
        return class_1;
    }());
    return UserEntity;
}());
exports.UserEntity = UserEntity;
var SessionEntity = /** @class */ (function () {
    function SessionEntity(sessionId, refreshToken) {
        this.sessionId = sessionId;
        this.refreshToken = refreshToken;
        this.sessionId = sessionId;
        this.refreshToken = refreshToken;
    }
    SessionEntity.Builder = /** @class */ (function () {
        function class_2() {
        }
        class_2.prototype.sessionId = function (n) {
            if (typeof n !== 'string') {
                throw new common_1.HttpException('sessionId must be string', common_1.HttpStatus.BAD_REQUEST);
            }
            this._sessionId = n;
            return this;
        };
        class_2.prototype.refreshToken = function (n) {
            if (typeof n !== 'string') {
                throw new common_1.HttpException('sessionId must be string', common_1.HttpStatus.BAD_REQUEST);
            }
            this._sessionId = n;
            return this;
        };
        class_2.prototype.build = function () {
            return new UserEntity(this._sessionId, this._refreshToken);
        };
        return class_2;
    }());
    return SessionEntity;
}());
exports.SessionEntity = SessionEntity;
console.log(new UserEntity.Builder().userId('yongsoo').name('cho'));
