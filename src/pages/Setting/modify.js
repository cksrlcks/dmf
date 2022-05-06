import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackHeader from "../../components/backHeader";
import { updateMenu } from "../../lib/db";

import { ReactSortable } from "react-sortablejs";

const Order = ({ data, loading, mutate }) => {
    const navigate = useNavigate();

    const [sortableList, setSortableList] = useState(data);
    const [updateLoading, setUpdateLoading] = useState(false);
    const handleSave = async () => {
        setUpdateLoading(true);
        await updateMenu("menus", "default", sortableList);
        setUpdateLoading(false);
        alert("성공적으로 저장했습니다.");
        mutate();
    };

    const handleDelete = (id) => {
        setSortableList((prev) => prev.filter((item) => item.id !== id));
    };

    const handleToggle = (e, id, key) => {
        setSortableList((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    item[key] = e.target.checked;
                    return item;
                } else {
                    return item;
                }
            })
        );
    };

    const goToModify = (item) => {
        navigate(`/setting/modify/${item.id}`);
    };

    return (
        <>
            <BackHeader title={"셋팅"} btnAction={handleSave} actionName={"저장하기"} />
            {loading && <div className="loading">메뉴정보를 불러오는중입니다.</div>}
            {updateLoading && <div className="loading">저장중입니다.</div>}
            <ReactSortable list={sortableList} setList={setSortableList} className="sort-container">
                {sortableList.map((item) => (
                    <div className="sort-item" key={item.id}>
                        <div className="title">{item.name}</div>
                        <div className="control">
                            <div className="status-control">
                                <div className="check-group">
                                    <label className="check-box">
                                        <input type="checkbox" defaultChecked={item.new} onClick={(e) => handleToggle(e, item.id, "new")} />
                                        <span className="name">신규</span>
                                    </label>
                                    <label className="check-box">
                                        <input type="checkbox" defaultChecked={item.hot} onClick={(e) => handleToggle(e, item.id, "hot")} />
                                        <span className="name">인기</span>
                                    </label>
                                    <label className="check-box">
                                        <input type="checkbox" defaultChecked={item.recommand} onClick={(e) => handleToggle(e, item.id, "recommand")} />
                                        <span className="name">추천</span>
                                    </label>
                                    <label className="check-box">
                                        <input type="checkbox" defaultChecked={item.soldOut} onClick={(e) => handleToggle(e, item.id, "soldOut")} />
                                        <span className="name">품절</span>
                                    </label>
                                    <label className="check-box">
                                        <input type="checkbox" defaultChecked={item.hide} onClick={(e) => handleToggle(e, item.id, "hide")} />
                                        <span className="name">가리기</span>
                                    </label>
                                </div>
                            </div>
                            <div className="action-control">
                                <button type="button" onClick={() => goToModify(item)}>
                                    수정
                                </button>
                                <button type="button" onClick={() => handleDelete(item.id)}>
                                    삭제
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </ReactSortable>
        </>
    );
};

export default Order;
