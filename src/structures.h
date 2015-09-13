union Data {
	int num;
	char *name;
	struct Node *node;
};

struct Node {
	struct Link *outgoing;
	struct Link *incoming;
	int outgoing_len;
	int incoming_len;
	union Data data;
	char type;
};

struct Array {
	struct Node *outgoing;
	int outgoing_len;
};

struct Link {
	struct Node *source;
	struct Node *target;
	char relation;
	struct Node *custom;
};
