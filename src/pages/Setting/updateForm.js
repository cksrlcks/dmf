import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../../lib/db";
import { ToastsStore } from "react-toasts";

const UpdateForm = ({ data, handleUpdate, mutate }) => {
    const navigate = useNavigate();
    const categoryInput = useRef(data.category);
    const menuNameInput = useRef(data.name);
    const menuDescInput = useRef(data.desc);
    const priceInput = useRef(data.price);
    const hotInput = useRef(data.hot);
    const recInput = useRef(data.recommand);
    const newInput = useRef(data.new);
    const soldInput = useRef(data.soldOut);
    const hideInput = useRef(data.hide);
    const [loading, setLoading] = useState(false);
    const [uploadMent, setUploadMent] = useState("");

    const thumbnailInput = useRef();
    const [thumbnail, setThumbnail] = useState("");

    const handleThumbnail = (e) => {
        const image = e.target.files[0];
        setThumbnail((prev) => image);
    };

    const onModify = () => {
        if (!categoryInput.current.value.trim().length) return alert("카테고리명을 입력해주세요");
        if (!menuNameInput.current.value.trim().length) return alert("메뉴명을 입력해주세요");
        if (!menuDescInput.current.value.trim().length) return alert("메뉴설명을 입력해주세요");
        // if (!thumbnail) return alert("메뉴이미지를 첨부해주세요");

        if (thumbnailInput.current.value) {
            const uploadTask = storage.ref(`/images/${thumbnail.name}`).put(thumbnail, {
                cacheControl: "public,max-age=4000",
            });
            setUploadMent("이미지를 서버에 저장중입니다...");
            setLoading(true);

            const menuData = {
                id: data.id,
                category: categoryInput.current.value,
                name: menuNameInput.current.value,
                desc: menuDescInput.current.value,
                price: priceInput.current.value,
                hot: hotInput.current.checked,
                new: newInput.current.checked,
                recommand: recInput.current.checked,
                soldOut: soldInput.current.checked,
                hide: hideInput.current.checked,
            };

            uploadTask.on(
                "state_changed",
                (snapshot) => {},
                (err) => alert("에러가 발생했습니다."),
                () => {
                    storage
                        .ref("images")
                        .child(thumbnail.name)
                        .getDownloadURL()
                        .then((url) => {
                            setUploadMent("서버에 메뉴정보를 저장중입니다.");
                            handleUpdate({
                                ...menuData,
                                thumbnailUrl: url,
                            }).then(() => {
                                setLoading(false);
                                setUploadMent("");
                                mutate("menus").then(() => {
                                    ToastsStore.success("성공적으로 등록했습니다.");
                                    navigate(-1);
                                });
                            });
                        });
                }
            );
        } else {
            setLoading(true);

            const menuData = {
                id: data.id,
                category: categoryInput.current.value,
                name: menuNameInput.current.value,
                desc: menuDescInput.current.value,
                price: priceInput.current.value,
                hot: hotInput.current.checked,
                new: newInput.current.checked,
                recommand: recInput.current.checked,
                soldOut: soldInput.current.checked,
                hide: hideInput.current.checked,
            };

            handleUpdate({
                ...menuData,
                thumbnailUrl: data.thumbnailUrl ? data.thumbnailUrl : "",
            }).then(() => {
                setLoading(false);
                setUploadMent("");
                mutate("menus").then(() => {
                    ToastsStore.success("성공적으로 등록했습니다.");
                    navigate(-1);
                });
            });
        }
    };

    return (
        <div className="app-inner app-body">
            {loading && <div className="loading">{uploadMent}</div>}
            <div className="write-form">
                <label className="form-item">
                    <div className="label">카테고리</div>
                    <input type="text" defaultValue={data.category} ref={categoryInput} placeholder="카테고리명을 입력해주세요" />
                </label>
                <label className="form-item">
                    <div className="label">메뉴명</div>
                    <input type="text" defaultValue={data.name} ref={menuNameInput} placeholder="메뉴명을 입력해주세요" />
                </label>
                <label className="form-item">
                    <div className="label">메뉴설명</div>
                    <input type="text" defaultValue={data.desc} ref={menuDescInput} placeholder="메뉴설명을 입력해주세요" />
                </label>
                <div className="form-item">
                    <div className="label">썸네일 이미지</div>
                    {!thumbnailInput.current && (
                        <div className="preview">
                            <img src={`${data.thumbnailUrl}`} alt="" />
                        </div>
                    )}
                    <div className="upload-unit">
                        <input type="text" value={thumbnail ? thumbnail.name : "이미지를 첨부해주세요"} readOnly />
                        <label className="upload-btn">
                            파일 올리기
                            <input type="file" ref={thumbnailInput} onChange={handleThumbnail} hidden />
                        </label>
                    </div>
                </div>
                <div className="form-item">
                    <div className="label">상태</div>
                    <div className="check-group">
                        <label className="check-box">
                            <input type="checkbox" defaultChecked={data.new} ref={newInput} />
                            <span className="name">신규</span>
                        </label>
                        <label className="check-box">
                            <input type="checkbox" defaultChecked={data.hot} ref={hotInput} />
                            <span className="name">인기</span>
                        </label>
                        <label className="check-box">
                            <input type="checkbox" defaultChecked={data.recommand} ref={recInput} />
                            <span className="name">추천</span>
                        </label>
                        <label className="check-box">
                            <input type="checkbox" defaultChecked={data.soldOut} ref={soldInput} />
                            <span className="name">품절</span>
                        </label>
                        <label className="check-box">
                            <input type="checkbox" defaultChecked={data.hide} ref={hideInput} />
                            <span className="name">가리기</span>
                        </label>
                    </div>
                </div>
                <label className="form-item">
                    <div className="label">가격</div>
                    <input type="number" defaultValue={data.price} ref={priceInput} placeholder="가격을 입력해주세요" />
                </label>
                <button type="button" onClick={onModify} className="cm-btn">
                    수정하기
                </button>
            </div>
        </div>
    );
};

export default UpdateForm;
