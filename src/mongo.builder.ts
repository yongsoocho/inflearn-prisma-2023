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

export class PostEntity {
  postId?: ObjectId;
  title?: string;

  writer?: UserEntity;
  writerId?: ObjectId;

  comments: Array<{ userId: ObjectId; content: string; createdAt: Date }>;

  constructor(postId, title, writer, writerId, comments) {
    if (postId) this.postId = postId;
    if (title) this.title = title;
    if (writer) this.writer = writer;
    if (writerId) this.writerId = writerId;
    if (comments) this.comments = comments;
  }

  static Builder = class {
    _postId?: ObjectId;
    _title?: string;
    _writer?: UserEntity;
    _writerId?: ObjectId;
    _comments: Array<{ userId: ObjectId; content: string; createdAt: Date }>;

    postId(val: ObjectId) {
      this._postId = val;
      return this;
    }

    title(val: string) {
      this._title = val;
      return this;
    }

    writer(val: UserEntity) {
      this._writer = val;
      return this;
    }

    writerId(val: ObjectId) {
      this._writerId = val;
      return this;
    }

    comments(
      val: Array<{ userId: ObjectId; content: string; createdAt: Date }>,
    ) {
      this._comments = val;
      return this;
    }

    build() {
      return new PostEntity(
        this._postId,
        this._title,
        this._writer,
        this._writerId,
        this._comments,
      );
    }
  };
}
