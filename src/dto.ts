import { User } from '@node_modules/.prisma/postgre-client';
import { Session } from '@node_modules/.prisma/mongo-client';
import { HttpException, HttpStatus } from '@nestjs/common';

export class UserEntity implements User {
  constructor(public readonly userId: string, public readonly name: string) {
    this.userId = userId;
    this.name = name;
  }

  static Builder = class {
    _userId: string;
    _name: string;

    userId(n: string) {
      if (typeof n !== 'string') {
        throw new HttpException(
          'userId must be string',
          HttpStatus.BAD_REQUEST,
        );
      }
      this._userId = n;
      return this;
    }

    name(n: string) {
      if (typeof n !== 'string') {
        throw new HttpException(
          'userId must be string',
          HttpStatus.BAD_REQUEST,
        );
      }
      this._name = n;
      return this;
    }

    build(): UserEntity {
      return new UserEntity(this._userId, this._name);
    }
  };
}

export class SessionEntity implements Session {
  constructor(
    public readonly sessionId: string,
    public readonly refreshToken: string,
  ) {
    this.sessionId = sessionId;
    this.refreshToken = refreshToken;
  }

  static Builder = class {
    _sessionId: string;
    _refreshToken: string;

    sessionId(n: string) {
      if (typeof n !== 'string') {
        throw new HttpException(
          'sessionId must be string',
          HttpStatus.BAD_REQUEST,
        );
      }
      this._sessionId = n;
      return this;
    }

    refreshToken(n: string) {
      if (typeof n !== 'string') {
        throw new HttpException(
          'sessionId must be string',
          HttpStatus.BAD_REQUEST,
        );
      }
      this._sessionId = n;
      return this;
    }

    build(): UserEntity {
      return new UserEntity(this._sessionId, this._refreshToken);
    }
  };
}
