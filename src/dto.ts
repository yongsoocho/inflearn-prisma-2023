import {
  User,
  Room,
  UserEnteredRoom,
  Message,
} from '@node_modules/.prisma/postgre-client';
import { Session } from '@node_modules/.prisma/mongo-client';
import { HttpException, HttpStatus } from '@nestjs/common';

export class UserEntity implements User {
  constructor(
    public readonly userId: string,
    public readonly name: string,
    public readonly rooms: Room[],
  ) {}

  static Builder = class {
    _userId: string;
    _name: string;
    _rooms: Room[];

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
        throw new HttpException('name must be string', HttpStatus.BAD_REQUEST);
      }
      this._name = n;
      return this;
    }

    rooms(n: Room[]) {
      this._rooms = n;
      return this;
    }

    build(): UserEntity {
      return new UserEntity(this._userId, this._name, this._rooms);
    }
  };
}

// export class SessionEntity implements Session {
//   constructor(
//     public readonly sessionId: string,
//     public readonly refreshToken: string,
//   ) {
//     this.sessionId = sessionId;
//     this.refreshToken = refreshToken;
//   }

//   static Builder = class {
//     _sessionId: string;
//     _refreshToken: string;

//     sessionId(n: string) {
//       if (typeof n !== 'string') {
//         throw new HttpException(
//           'sessionId must be string',
//           HttpStatus.BAD_REQUEST,
//         );
//       }
//       this._sessionId = n;
//       return this;
//     }

//     refreshToken(n: string) {
//       if (typeof n !== 'string') {
//         throw new HttpException(
//           'sessionId must be string',
//           HttpStatus.BAD_REQUEST,
//         );
//       }
//       this._sessionId = n;
//       return this;
//     }

//     build(): UserEntity {
//       return new UserEntity(this._sessionId, this._refreshToken);
//     }
//   };
// }

export class UserEnteredRoomEntity implements UserEnteredRoom {
  constructor(
    public readonly userId: string,
    public readonly roomId: string,
    public readonly user: User,
    public readonly room: Room,
  ) {}

  static Builder = class {
    _userId: string;
    _name: string;
    _user: User;
    _room: Room;

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
        throw new HttpException('name must be string', HttpStatus.BAD_REQUEST);
      }
      this._name = n;
      return this;
    }

    user(n: User) {
      this._user = n;
      return this;
    }

    room(n: Room) {
      this._room = n;
      return this;
    }

    build(): UserEnteredRoomEntity {
      return new UserEnteredRoomEntity(
        this._userId,
        this._name,
        this._user,
        this._room,
      );
    }
  };
}

export class RoomEntity implements Room {
  constructor(
    public readonly roomId: string,
    public readonly name: string,
    public readonly users: UserEnteredRoom[],
    public readonly messages: Message[],
  ) {}

  static Builder = class {
    _roomId: string;
    _name: string;
    _users: UserEnteredRoom[];
    _messages: Message[];

    roomId(n: string) {
      if (typeof n !== 'string') {
        throw new HttpException(
          'roomId must be string',
          HttpStatus.BAD_REQUEST,
        );
      }
      this._roomId = n;
      return this;
    }

    name(n: string) {
      if (typeof n !== 'string') {
        throw new HttpException('name must be string', HttpStatus.BAD_REQUEST);
      }
      this._name = n;
      return this;
    }

    users(n: UserEnteredRoom[]) {
      this._users = n;
      return this;
    }

    room(n: Message[]) {
      this._messages = n;
      return this;
    }

    build(): RoomEntity {
      return new RoomEntity(
        this._roomId,
        this._name,
        this._users,
        this._messages,
      );
    }
  };
}

// export class MessageEntity implements Message {
//   constructor(
//     public readonly messageId: string,
//     public readonly roomId: string,
//     public readonly message: string,
//     public readonly createdAt: Date,
//   ) {}

//   static Builder = class {
//     _messageId: string;
//     _roomId: string;
//     _message: string;
//     _createdAt: Date;

//     messageId(n: string) {
//       if (typeof n !== 'string') {
//         throw new HttpException(
//           '_messageId must be string',
//           HttpStatus.BAD_REQUEST,
//         );
//       }
//       this._messageId = n;
//       return this;
//     }

//     roomId(n: string) {
//       if (typeof n !== 'string') {
//         throw new HttpException(
//           'roomId must be string',
//           HttpStatus.BAD_REQUEST,
//         );
//       }
//       this._roomId = n;
//       return this;
//     }

//     message(n: string) {
//       this._message = n;
//       return this;
//     }

//     createdAt(n: Date) {
//       this._createdAt = n;
//       return this;
//     }

//     build(): MessageEntity {
//       return new MessageEntity(
//         this._messageId,
//         this._roomId,
//         this._message,
//         this._createdAt,
//       );
//     }
//   };
// }
