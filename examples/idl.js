export default {
  "include": {
    "CommonModel": {
      "namespace": {
        "java": {
          "serviceName": "com.sankuai.sjst.m.common.thrift.model"
        }
      },
      "struct": {
        "Status": [{
            "id": 1,
            "type": "i32",
            "name": "code",
            "option": "required"
          },
          {
            "id": 2,
            "type": "string",
            "name": "msg",
            "option": "optional"
          }
        ],
        "PageTO": [{
            "id": 1,
            "type": "i32",
            "name": "currentPage",
            "option": "required"
          },
          {
            "id": 2,
            "type": "i32",
            "name": "perPage",
            "option": "required"
          },
          {
            "id": 3,
            "type": "i64",
            "name": "total",
            "option": "optional"
          }
        ],
        "FieldSortTO": [{
            "id": 1,
            "type": "string",
            "name": "field",
            "option": "required"
          },
          {
            "id": 2,
            "type": "string",
            "name": "direct",
            "option": "required"
          }
        ],
        "PairTO": [{
            "id": 1,
            "type": "i32",
            "name": "id",
            "option": "required"
          },
          {
            "id": 2,
            "type": "string",
            "name": "name",
            "option": "required"
          }
        ],
        "CommonResp": [{
          "id": 1,
          "type": "Status",
          "name": "status",
          "option": "required"
        }]
      }
    },
    "SgSupportTicketReadModel": {
      "include": {
        "CommonModel": {
          "namespace": {
            "java": {
              "serviceName": "com.sankuai.sjst.m.common.thrift.model"
            }
          },
          "struct": {
            "Status": [{
                "id": 1,
                "type": "i32",
                "name": "code",
                "option": "required"
              },
              {
                "id": 2,
                "type": "string",
                "name": "msg",
                "option": "optional"
              }
            ],
            "PageTO": [{
                "id": 1,
                "type": "i32",
                "name": "currentPage",
                "option": "required"
              },
              {
                "id": 2,
                "type": "i32",
                "name": "perPage",
                "option": "required"
              },
              {
                "id": 3,
                "type": "i64",
                "name": "total",
                "option": "optional"
              }
            ],
            "FieldSortTO": [{
                "id": 1,
                "type": "string",
                "name": "field",
                "option": "required"
              },
              {
                "id": 2,
                "type": "string",
                "name": "direct",
                "option": "required"
              }
            ],
            "PairTO": [{
                "id": 1,
                "type": "i32",
                "name": "id",
                "option": "required"
              },
              {
                "id": 2,
                "type": "string",
                "name": "name",
                "option": "required"
              }
            ],
            "CommonResp": [{
              "id": 1,
              "type": "Status",
              "name": "status",
              "option": "required"
            }]
          }
        },
        "BizCommonModel": {
          "include": {
            "CommonModel": {
              "namespace": {
                "java": {
                  "serviceName": "com.sankuai.sjst.m.common.thrift.model"
                }
              },
              "struct": {
                "Status": [{
                    "id": 1,
                    "type": "i32",
                    "name": "code",
                    "option": "required"
                  },
                  {
                    "id": 2,
                    "type": "string",
                    "name": "msg",
                    "option": "optional"
                  }
                ],
                "PageTO": [{
                    "id": 1,
                    "type": "i32",
                    "name": "currentPage",
                    "option": "required"
                  },
                  {
                    "id": 2,
                    "type": "i32",
                    "name": "perPage",
                    "option": "required"
                  },
                  {
                    "id": 3,
                    "type": "i64",
                    "name": "total",
                    "option": "optional"
                  }
                ],
                "FieldSortTO": [{
                    "id": 1,
                    "type": "string",
                    "name": "field",
                    "option": "required"
                  },
                  {
                    "id": 2,
                    "type": "string",
                    "name": "direct",
                    "option": "required"
                  }
                ],
                "PairTO": [{
                    "id": 1,
                    "type": "i32",
                    "name": "id",
                    "option": "required"
                  },
                  {
                    "id": 2,
                    "type": "string",
                    "name": "name",
                    "option": "required"
                  }
                ],
                "CommonResp": [{
                  "id": 1,
                  "type": "Status",
                  "name": "status",
                  "option": "required"
                }]
              }
            }
          },
          "namespace": {
            "java": {
              "serviceName": "com.sankuai.sjst.m.seagullticket.model.bizCommon"
            }
          },
          "struct": {
            "SgEmpTO": [{
                "id": 1,
                "type": "i32",
                "name": "id",
                "option": "required"
              },
              {
                "id": 2,
                "type": "string",
                "name": "name",
                "option": "required"
              },
              {
                "id": 3,
                "type": "string",
                "name": "phone",
                "option": "required"
              },
              {
                "id": 4,
                "type": "string",
                "name": "account",
                "option": "required"
              },
              {
                "id": 5,
                "type": "bool",
                "name": "dismissed",
                "option": "required"
              }
            ],
            "SgContactMethodTO": [{
                "id": 1,
                "type": "string",
                "name": "method",
                "option": "required"
              },
              {
                "id": 2,
                "type": "string",
                "name": "value",
                "option": "required"
              }
            ],
            "SgContactInfoTO": [{
                "id": 1,
                "type": "string",
                "name": "name",
                "option": "required"
              },
              {
                "id": 2,
                "type": {
                  "name": "list",
                  "valueType": "SgContactMethodTO"
                },
                "name": "contactMethods",
                "option": "required"
              },
              {
                "id": 3,
                "type": "i64",
                "name": "id",
                "option": "optional"
              }
            ],
            "SgGisInfoTO": [{
                "id": 1,
                "type": "i32",
                "name": "latitude",
                "option": "required"
              },
              {
                "id": 2,
                "type": "i32",
                "name": "longtitude",
                "option": "required"
              }
            ],
            "SgPoiInfoTO": [{
                "id": 1,
                "type": "i64",
                "name": "poiId",
                "option": "required"
              },
              {
                "id": 2,
                "type": "string",
                "name": "name",
                "option": "required"
              },
              {
                "id": 3,
                "type": "CommonModel.PairTO",
                "name": "province",
                "option": "optional"
              },
              {
                "id": 4,
                "type": "CommonModel.PairTO",
                "name": "city",
                "option": "optional"
              },
              {
                "id": 5,
                "type": "CommonModel.PairTO",
                "name": "location",
                "option": "optional"
              },
              {
                "id": 6,
                "type": "string",
                "name": "address",
                "option": "required"
              },
              {
                "id": 7,
                "type": {
                  "name": "list",
                  "valueType": "SgContactInfoTO"
                },
                "name": "contactsInfo",
                "option": "optional"
              },
              {
                "id": 8,
                "type": "SgGisInfoTO",
                "name": "gisInfo",
                "option": "optional"
              }
            ]
          }
        },
        "SgIssueCategoryModel": {
          "include": {
            "CommonModel": {
              "namespace": {
                "java": {
                  "serviceName": "com.sankuai.sjst.m.common.thrift.model"
                }
              },
              "struct": {
                "Status": [{
                    "id": 1,
                    "type": "i32",
                    "name": "code",
                    "option": "required"
                  },
                  {
                    "id": 2,
                    "type": "string",
                    "name": "msg",
                    "option": "optional"
                  }
                ],
                "PageTO": [{
                    "id": 1,
                    "type": "i32",
                    "name": "currentPage",
                    "option": "required"
                  },
                  {
                    "id": 2,
                    "type": "i32",
                    "name": "perPage",
                    "option": "required"
                  },
                  {
                    "id": 3,
                    "type": "i64",
                    "name": "total",
                    "option": "optional"
                  }
                ],
                "FieldSortTO": [{
                    "id": 1,
                    "type": "string",
                    "name": "field",
                    "option": "required"
                  },
                  {
                    "id": 2,
                    "type": "string",
                    "name": "direct",
                    "option": "required"
                  }
                ],
                "PairTO": [{
                    "id": 1,
                    "type": "i32",
                    "name": "id",
                    "option": "required"
                  },
                  {
                    "id": 2,
                    "type": "string",
                    "name": "name",
                    "option": "required"
                  }
                ],
                "CommonResp": [{
                  "id": 1,
                  "type": "Status",
                  "name": "status",
                  "option": "required"
                }]
              }
            }
          },
          "namespace": {
            "java": {
              "serviceName": "com.sankuai.sjst.m.seagullticket.model"
            }
          },
          "struct": {
            "SgIssueCategoryTO": [{
                "id": 1,
                "type": "i32",
                "name": "id",
                "option": "required"
              },
              {
                "id": 2,
                "type": "i32",
                "name": "parentId",
                "option": "required"
              },
              {
                "id": 3,
                "type": "i32",
                "name": "level",
                "option": "required"
              },
              {
                "id": 4,
                "type": "bool",
                "name": "leaf",
                "option": "required"
              },
              {
                "id": 5,
                "type": "string",
                "name": "name",
                "option": "required"
              },
              {
                "id": 6,
                "type": "string",
                "name": "namePinyin",
                "option": "required"
              },
              {
                "id": 7,
                "type": "i64",
                "name": "createdTime",
                "option": "required"
              },
              {
                "id": 8,
                "type": "i64",
                "name": "modifiedTime",
                "option": "required"
              },
              {
                "id": 9,
                "type": "string",
                "name": "path",
                "option": "optional"
              },
              {
                "id": 10,
                "type": "string",
                "name": "pathName",
                "option": "optional"
              }
            ],
            "SgIssueCategoriesResp": [{
                "id": 1,
                "type": "CommonModel.Status",
                "name": "status",
                "option": "required"
              },
              {
                "id": 2,
                "type": {
                  "name": "list",
                  "valueType": "SgIssueCategoryTO"
                },
                "name": "issueCategories",
                "option": "optional"
              }
            ]
          }
        },
        "SgSupportTicketModel": {
          "include": {
            "CommonModel": {
              "namespace": {
                "java": {
                  "serviceName": "com.sankuai.sjst.m.common.thrift.model"
                }
              },
              "struct": {
                "Status": [{
                    "id": 1,
                    "type": "i32",
                    "name": "code",
                    "option": "required"
                  },
                  {
                    "id": 2,
                    "type": "string",
                    "name": "msg",
                    "option": "optional"
                  }
                ],
                "PageTO": [{
                    "id": 1,
                    "type": "i32",
                    "name": "currentPage",
                    "option": "required"
                  },
                  {
                    "id": 2,
                    "type": "i32",
                    "name": "perPage",
                    "option": "required"
                  },
                  {
                    "id": 3,
                    "type": "i64",
                    "name": "total",
                    "option": "optional"
                  }
                ],
                "FieldSortTO": [{
                    "id": 1,
                    "type": "string",
                    "name": "field",
                    "option": "required"
                  },
                  {
                    "id": 2,
                    "type": "string",
                    "name": "direct",
                    "option": "required"
                  }
                ],
                "PairTO": [{
                    "id": 1,
                    "type": "i32",
                    "name": "id",
                    "option": "required"
                  },
                  {
                    "id": 2,
                    "type": "string",
                    "name": "name",
                    "option": "required"
                  }
                ],
                "CommonResp": [{
                  "id": 1,
                  "type": "Status",
                  "name": "status",
                  "option": "required"
                }]
              }
            },
            "BizCommonModel": {
              "include": {
                "CommonModel": {
                  "namespace": {
                    "java": {
                      "serviceName": "com.sankuai.sjst.m.common.thrift.model"
                    }
                  },
                  "struct": {
                    "Status": [{
                        "id": 1,
                        "type": "i32",
                        "name": "code",
                        "option": "required"
                      },
                      {
                        "id": 2,
                        "type": "string",
                        "name": "msg",
                        "option": "optional"
                      }
                    ],
                    "PageTO": [{
                        "id": 1,
                        "type": "i32",
                        "name": "currentPage",
                        "option": "required"
                      },
                      {
                        "id": 2,
                        "type": "i32",
                        "name": "perPage",
                        "option": "required"
                      },
                      {
                        "id": 3,
                        "type": "i64",
                        "name": "total",
                        "option": "optional"
                      }
                    ],
                    "FieldSortTO": [{
                        "id": 1,
                        "type": "string",
                        "name": "field",
                        "option": "required"
                      },
                      {
                        "id": 2,
                        "type": "string",
                        "name": "direct",
                        "option": "required"
                      }
                    ],
                    "PairTO": [{
                        "id": 1,
                        "type": "i32",
                        "name": "id",
                        "option": "required"
                      },
                      {
                        "id": 2,
                        "type": "string",
                        "name": "name",
                        "option": "required"
                      }
                    ],
                    "CommonResp": [{
                      "id": 1,
                      "type": "Status",
                      "name": "status",
                      "option": "required"
                    }]
                  }
                }
              },
              "namespace": {
                "java": {
                  "serviceName": "com.sankuai.sjst.m.seagullticket.model.bizCommon"
                }
              },
              "struct": {
                "SgEmpTO": [{
                    "id": 1,
                    "type": "i32",
                    "name": "id",
                    "option": "required"
                  },
                  {
                    "id": 2,
                    "type": "string",
                    "name": "name",
                    "option": "required"
                  },
                  {
                    "id": 3,
                    "type": "string",
                    "name": "phone",
                    "option": "required"
                  },
                  {
                    "id": 4,
                    "type": "string",
                    "name": "account",
                    "option": "required"
                  },
                  {
                    "id": 5,
                    "type": "bool",
                    "name": "dismissed",
                    "option": "required"
                  }
                ],
                "SgContactMethodTO": [{
                    "id": 1,
                    "type": "string",
                    "name": "method",
                    "option": "required"
                  },
                  {
                    "id": 2,
                    "type": "string",
                    "name": "value",
                    "option": "required"
                  }
                ],
                "SgContactInfoTO": [{
                    "id": 1,
                    "type": "string",
                    "name": "name",
                    "option": "required"
                  },
                  {
                    "id": 2,
                    "type": {
                      "name": "list",
                      "valueType": "SgContactMethodTO"
                    },
                    "name": "contactMethods",
                    "option": "required"
                  },
                  {
                    "id": 3,
                    "type": "i64",
                    "name": "id",
                    "option": "optional"
                  }
                ],
                "SgGisInfoTO": [{
                    "id": 1,
                    "type": "i32",
                    "name": "latitude",
                    "option": "required"
                  },
                  {
                    "id": 2,
                    "type": "i32",
                    "name": "longtitude",
                    "option": "required"
                  }
                ],
                "SgPoiInfoTO": [{
                    "id": 1,
                    "type": "i64",
                    "name": "poiId",
                    "option": "required"
                  },
                  {
                    "id": 2,
                    "type": "string",
                    "name": "name",
                    "option": "required"
                  },
                  {
                    "id": 3,
                    "type": "CommonModel.PairTO",
                    "name": "province",
                    "option": "optional"
                  },
                  {
                    "id": 4,
                    "type": "CommonModel.PairTO",
                    "name": "city",
                    "option": "optional"
                  },
                  {
                    "id": 5,
                    "type": "CommonModel.PairTO",
                    "name": "location",
                    "option": "optional"
                  },
                  {
                    "id": 6,
                    "type": "string",
                    "name": "address",
                    "option": "required"
                  },
                  {
                    "id": 7,
                    "type": {
                      "name": "list",
                      "valueType": "SgContactInfoTO"
                    },
                    "name": "contactsInfo",
                    "option": "optional"
                  },
                  {
                    "id": 8,
                    "type": "SgGisInfoTO",
                    "name": "gisInfo",
                    "option": "optional"
                  }
                ]
              }
            },
            "SgIssueCategoryModel": {
              "include": {
                "CommonModel": {
                  "namespace": {
                    "java": {
                      "serviceName": "com.sankuai.sjst.m.common.thrift.model"
                    }
                  },
                  "struct": {
                    "Status": [{
                        "id": 1,
                        "type": "i32",
                        "name": "code",
                        "option": "required"
                      },
                      {
                        "id": 2,
                        "type": "string",
                        "name": "msg",
                        "option": "optional"
                      }
                    ],
                    "PageTO": [{
                        "id": 1,
                        "type": "i32",
                        "name": "currentPage",
                        "option": "required"
                      },
                      {
                        "id": 2,
                        "type": "i32",
                        "name": "perPage",
                        "option": "required"
                      },
                      {
                        "id": 3,
                        "type": "i64",
                        "name": "total",
                        "option": "optional"
                      }
                    ],
                    "FieldSortTO": [{
                        "id": 1,
                        "type": "string",
                        "name": "field",
                        "option": "required"
                      },
                      {
                        "id": 2,
                        "type": "string",
                        "name": "direct",
                        "option": "required"
                      }
                    ],
                    "PairTO": [{
                        "id": 1,
                        "type": "i32",
                        "name": "id",
                        "option": "required"
                      },
                      {
                        "id": 2,
                        "type": "string",
                        "name": "name",
                        "option": "required"
                      }
                    ],
                    "CommonResp": [{
                      "id": 1,
                      "type": "Status",
                      "name": "status",
                      "option": "required"
                    }]
                  }
                }
              },
              "namespace": {
                "java": {
                  "serviceName": "com.sankuai.sjst.m.seagullticket.model"
                }
              },
              "struct": {
                "SgIssueCategoryTO": [{
                    "id": 1,
                    "type": "i32",
                    "name": "id",
                    "option": "required"
                  },
                  {
                    "id": 2,
                    "type": "i32",
                    "name": "parentId",
                    "option": "required"
                  },
                  {
                    "id": 3,
                    "type": "i32",
                    "name": "level",
                    "option": "required"
                  },
                  {
                    "id": 4,
                    "type": "bool",
                    "name": "leaf",
                    "option": "required"
                  },
                  {
                    "id": 5,
                    "type": "string",
                    "name": "name",
                    "option": "required"
                  },
                  {
                    "id": 6,
                    "type": "string",
                    "name": "namePinyin",
                    "option": "required"
                  },
                  {
                    "id": 7,
                    "type": "i64",
                    "name": "createdTime",
                    "option": "required"
                  },
                  {
                    "id": 8,
                    "type": "i64",
                    "name": "modifiedTime",
                    "option": "required"
                  },
                  {
                    "id": 9,
                    "type": "string",
                    "name": "path",
                    "option": "optional"
                  },
                  {
                    "id": 10,
                    "type": "string",
                    "name": "pathName",
                    "option": "optional"
                  }
                ],
                "SgIssueCategoriesResp": [{
                    "id": 1,
                    "type": "CommonModel.Status",
                    "name": "status",
                    "option": "required"
                  },
                  {
                    "id": 2,
                    "type": {
                      "name": "list",
                      "valueType": "SgIssueCategoryTO"
                    },
                    "name": "issueCategories",
                    "option": "optional"
                  }
                ]
              }
            }
          },
          "namespace": {
            "java": {
              "serviceName": "com.sankuai.sjst.m.seagullticket.model"
            }
          },
          "struct": {
            "SgTicketTimeInfoTO": [{
                "id": 1,
                "type": "i64",
                "name": "estimateTime",
                "option": "optional"
              },
              {
                "id": 2,
                "type": "i64",
                "name": "installTime",
                "option": "optional"
              },
              {
                "id": 3,
                "type": "i64",
                "name": "completeTime",
                "option": "optional"
              }
            ]
          }
        }
      },
      "namespace": {
        "java": {
          "serviceName": "com.sankuai.sjst.m.seagullticket.model.read"
        }
      },
      "struct": {
        "SgPxTicketInfoTO": [{
            "id": 1,
            "type": "i64",
            "name": "ticketId",
            "option": "required"
          },
          {
            "id": 2,
            "type": "string",
            "name": "poiName",
            "option": "required"
          },
          {
            "id": 3,
            "type": "i64",
            "name": "poiId",
            "option": "required"
          },
          {
            "id": 4,
            "type": "string",
            "name": "poiAddr",
            "option": "required"
          }
        ],
        "SgSupportTicketOpLogTO": [{
            "id": 1,
            "type": "i64",
            "name": "id",
            "option": "required"
          },
          {
            "id": 2,
            "type": "i64",
            "name": "supportTicketId",
            "option": "required"
          },
          {
            "id": 3,
            "type": "CommonModel.PairTO",
            "name": "operation",
            "option": "required"
          },
          {
            "id": 4,
            "type": "string",
            "name": "remark",
            "option": "optional"
          },
          {
            "id": 5,
            "type": "CommonModel.PairTO",
            "name": "beforeStatus",
            "option": "required"
          },
          {
            "id": 6,
            "type": "CommonModel.PairTO",
            "name": "afterStatus",
            "option": "required"
          },
          {
            "id": 7,
            "type": "BizCommonModel.SgEmpTO",
            "name": "receiver",
            "option": "required"
          },
          {
            "id": 8,
            "type": "BizCommonModel.SgEmpTO",
            "name": "operator",
            "option": "required"
          },
          {
            "id": 9,
            "type": "i64",
            "name": "createdTime",
            "option": "required"
          }
        ],
        "SgSupportTicketOpSetTO": [{
            "id": 1,
            "type": "bool",
            "name": "allowAccept",
            "option": "required"
          },
          {
            "id": 2,
            "type": "bool",
            "name": "allowReject",
            "option": "required"
          },
          {
            "id": 3,
            "type": "bool",
            "name": "allowRequstTransfer",
            "option": "required"
          },
          {
            "id": 4,
            "type": "bool",
            "name": "allowComplete",
            "option": "required"
          },
          {
            "id": 5,
            "type": "bool",
            "name": "allowTerminate",
            "option": "required"
          },
          {
            "id": 6,
            "type": "bool",
            "name": "allowRemoteSolve",
            "option": "required"
          },
          {
            "id": 7,
            "type": "bool",
            "name": "allowSignIn",
            "option": "required"
          },
          {
            "id": 8,
            "type": "bool",
            "name": "allowConfirm",
            "option": "required"
          }
        ],
        "SgSupportTicketItemTO": [{
            "id": 1,
            "type": "i64",
            "name": "id",
            "option": "required"
          },
          {
            "id": 2,
            "type": "BizCommonModel.SgPoiInfoTO",
            "name": "poiInfo",
            "option": "required"
          },
          {
            "id": 3,
            "type": "SgSupportTicketOpSetTO",
            "name": "opSetInfo",
            "option": "optional"
          },
          {
            "id": 4,
            "type": "SgSupportTicketModel.SgTicketTimeInfoTO",
            "name": "timeInfo",
            "option": "required"
          },
          {
            "id": 5,
            "type": "CommonModel.PairTO",
            "name": "status",
            "option": "optional"
          },
          {
            "id": 6,
            "type": "BizCommonModel.SgEmpTO",
            "name": "executant",
            "option": "optional"
          },
          {
            "id": 7,
            "type": "CommonModel.PairTO",
            "name": "source",
            "option": "required"
          },
          {
            "id": 8,
            "type": "BizCommonModel.SgEmpTO",
            "name": "promoter",
            "option": "optional"
          },
          {
            "id": 9,
            "type": "string",
            "name": "operationReason",
            "option": "optional"
          },
          {
            "id": 10,
            "type": "i64",
            "name": "createdTime",
            "option": "optional"
          },
          {
            "id": 11,
            "type": "string",
            "name": "solution",
            "option": "optional"
          },
          {
            "id": 12,
            "type": "i32",
            "name": "issueCategory",
            "option": "optional"
          }
        ],
        "SgSupportTicketDetailTO": [{
            "id": 1,
            "type": "i64",
            "name": "id",
            "option": "required"
          },
          {
            "id": 2,
            "type": "BizCommonModel.SgEmpTO",
            "name": "promoter",
            "option": "required"
          },
          {
            "id": 3,
            "type": "BizCommonModel.SgEmpTO",
            "name": "executant",
            "option": "optional"
          },
          {
            "id": 4,
            "type": "SgSupportTicketModel.SgTicketTimeInfoTO",
            "name": "timeInfo",
            "option": "required"
          },
          {
            "id": 5,
            "type": "BizCommonModel.SgPoiInfoTO",
            "name": "poi",
            "option": "required"
          },
          {
            "id": 6,
            "type": "SgIssueCategoryModel.SgIssueCategoryTO",
            "name": "issueCategory",
            "option": "optional"
          },
          {
            "id": 7,
            "type": "string",
            "name": "issueDescription",
            "option": "optional"
          },
          {
            "id": 8,
            "type": "string",
            "name": "remark",
            "option": "optional"
          },
          {
            "id": 9,
            "type": "CommonModel.PairTO",
            "name": "status",
            "option": "required"
          },
          {
            "id": 10,
            "type": "CommonModel.PairTO",
            "name": "source",
            "option": "required"
          },
          {
            "id": 11,
            "type": "string",
            "name": "solution",
            "option": "optional"
          },
          {
            "id": 12,
            "type": "i64",
            "name": "createdTime",
            "option": "required"
          },
          {
            "id": 13,
            "type": "i64",
            "name": "modifiedTime",
            "option": "required"
          },
          {
            "id": 14,
            "type": {
              "name": "list",
              "valueType": "SgSupportTicketOpLogTO"
            },
            "name": "opLog",
            "option": "required"
          },
          {
            "id": 15,
            "type": {
              "name": "list",
              "valueType": "SgSupportTicketItemTO"
            },
            "name": "historyTickets",
            "option": "optional"
          },
          {
            "id": 16,
            "type": "string",
            "name": "operationReason",
            "option": "optional"
          },
          {
            "id": 17,
            "type": "SgSupportTicketOpSetTO",
            "name": "opSetInfo",
            "option": "required"
          },
          {
            "id": 18,
            "type": "SgPxTicketInfoTO",
            "name": "pxTicketInfoTO",
            "option": "optional"
          }
        ],
        "SgGetSupportTicketDetailResp": [{
            "id": 1,
            "type": "CommonModel.Status",
            "name": "status",
            "option": "required"
          },
          {
            "id": 2,
            "type": "SgSupportTicketDetailTO",
            "name": "supportTicketTO",
            "option": "optional"
          }
        ],
        "SgQuerySupportTicketsConditionTO": [{
            "id": 1,
            "type": "i32",
            "name": "queryType",
            "option": "required"
          },
          {
            "id": 2,
            "type": "string",
            "name": "keyword",
            "option": "optional"
          },
          {
            "id": 3,
            "type": "i32",
            "name": "status",
            "option": "optional"
          },
          {
            "id": 4,
            "type": "i32",
            "name": "empId",
            "option": "required"
          }
        ],
        "SgQuerySupportTicketsReq": [{
            "id": 1,
            "type": "CommonModel.PageTO",
            "name": "pageInfo",
            "option": "required"
          },
          {
            "id": 2,
            "type": {
              "name": "list",
              "valueType": "CommonModel.FieldSortTO"
            },
            "name": "fieldSortTO",
            "option": "optional"
          },
          {
            "id": 3,
            "type": "SgQuerySupportTicketsConditionTO",
            "name": "condition",
            "option": "required"
          },
          {
            "id": 4,
            "type": "i32",
            "name": "operatorId",
            "option": "required"
          }
        ],
        "SgQuerySupportTicketsResp": [{
            "id": 1,
            "type": "CommonModel.Status",
            "name": "status",
            "option": "required"
          },
          {
            "id": 2,
            "type": "CommonModel.PageTO",
            "name": "pageInfo",
            "option": "optional"
          },
          {
            "id": 3,
            "type": {
              "name": "list",
              "valueType": "SgSupportTicketItemTO"
            },
            "name": "supportTicketItems",
            "option": "optional"
          }
        ],
        "SgListSupportTicketStatusEnumsResp": [{
            "id": 1,
            "type": "CommonModel.Status",
            "name": "status",
            "option": "required"
          },
          {
            "id": 2,
            "type": {
              "name": "list",
              "valueType": "CommonModel.PairTO"
            },
            "name": "statusEnums",
            "option": "optional"
          }
        ],
        "SgCountSupportTicketsResp": [{
            "id": 1,
            "type": "CommonModel.Status",
            "name": "status",
            "option": "required"
          },
          {
            "id": 2,
            "type": "i32",
            "name": "total",
            "option": "optional"
          }
        ],
        "SgGetOplogsBySupportTicketIdResp": [{
            "id": 1,
            "type": "CommonModel.Status",
            "name": "status",
            "option": "required"
          },
          {
            "id": 2,
            "type": {
              "name": "list",
              "valueType": "SgSupportTicketOpLogTO"
            },
            "name": "oplogs",
            "option": "optional"
          }
        ]
      }
    }
  },
  "namespace": {
    "java": {
      "serviceName": "com.sankuai.sjst.m.seagullticket.service"
    }
  },
  "service": {
    "SgSupportTicketReadThriftService": {
      "getSupportTicketDetail": {
        "type": "SgSupportTicketReadModel.SgGetSupportTicketDetailResp",
        "name": "getSupportTicketDetail",
        "args": [{
            "id": 1,
            "type": "i32",
            "name": "operatorId",
            "option": "required"
          },
          {
            "id": 2,
            "type": "i64",
            "name": "suppTicketId",
            "option": "required"
          }
        ],
        "throws": [],
        "oneway": false
      },
      "querySupportTickets": {
        "type": "SgSupportTicketReadModel.SgQuerySupportTicketsResp",
        "name": "querySupportTickets",
        "args": [{
          "id": 1,
          "type": "SgSupportTicketReadModel.SgQuerySupportTicketsReq",
          "name": "req",
          "option": "required"
        }],
        "throws": [],
        "oneway": false
      },
      "listSupportTicketStatusEnums": {
        "type": "SgSupportTicketReadModel.SgListSupportTicketStatusEnumsResp",
        "name": "listSupportTicketStatusEnums",
        "args": [{
          "id": 1,
          "type": "i32",
          "name": "operatorId",
          "option": "required"
        }],
        "throws": [],
        "oneway": false
      },
      "countExecutantTickets": {
        "type": "SgSupportTicketReadModel.SgCountSupportTicketsResp",
        "name": "countExecutantTickets",
        "args": [{
            "id": 1,
            "type": "i32",
            "name": "operatorId",
            "option": "required"
          },
          {
            "id": 2,
            "type": "i32",
            "name": "executantId",
            "option": "required"
          },
          {
            "id": 3,
            "type": "i32",
            "name": "status",
            "option": "required"
          }
        ],
        "throws": [],
        "oneway": false
      },
      "getOplogsBySupportTicketId": {
        "type": "SgSupportTicketReadModel.SgGetOplogsBySupportTicketIdResp",
        "name": "getOplogsBySupportTicketId",
        "args": [{
            "id": 1,
            "type": "i32",
            "name": "operatorId",
            "option": "required"
          },
          {
            "id": 2,
            "type": "i64",
            "name": "supportTicketId",
            "option": "required"
          }
        ],
        "throws": [],
        "oneway": false
      }
    }
  }
}
