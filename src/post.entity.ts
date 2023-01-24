import { UserEntity } from './user.entity';
import { ObjectId } from 'bson';

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
      this._comments = val.map((e) => ({
        userId: e.userId,
        content: e.content,
        createdAt: e.createdAt,
      }));
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
