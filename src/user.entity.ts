type ObjectId = string;
type Int = number;
type Float = number;

export enum ERole {
  USER = 'USER',
  MANAGER = 'MANAGER',
  ADMIN = 'ADMIN',
}

export class UserEntity {
  userId: ObjectId;
  age: Int;
  createdAt: Date;
  height: Float;
  role: ERole;

  constructor(userId, age, createdAt, height, role) {
    if (userId) this.userId = userId;
    if (age) this.age = age;
    if (createdAt) this.createdAt = createdAt;
    if (height) this.height = height;
    if (role) this.role = role;
  }

  static Builder = class {
    _userId?: ObjectId;
    _age?: Int;
    _createdAt?: Date;
    _height?: Float;
    _role?: ERole;

    userId(val: ObjectId) {
      this._userId = val;
      return this;
    }

    age(val: Int | string) {
      if (typeof val == 'string') val = Number(val);

      if (typeof val == 'number' && val > 0) this._age = val;
      else this._age = 0;

      return this;
    }

    createdAt(val: Date) {
      this._createdAt = val;
      return this;
    }

    height(val: Float) {
      if (typeof val == 'number' && val > 0) this._height = val;
      else this._height = 0;

      return this;
    }

    role(val: ERole) {
      this._role = val;
      return this;
    }

    build() {
      return new UserEntity(
        this._userId,
        this._age,
        this._createdAt,
        this._height,
        this._role,
      );
    }
  };
}
