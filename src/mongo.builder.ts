type ObjectId = string;
type Int = number;
type Float = number;
type DateTimeISO = string;

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
    console.log(userId, age, createdAt, height, role);
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

    age(val: Int) {
      this._age = val;
      return this;
    }

    createdAt(val: Date) {
      this._createdAt = val;
      return this;
    }

    height(val: Float) {
      this._height = val;
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
