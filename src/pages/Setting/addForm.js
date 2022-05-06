import { storage } from "../../lib/db";
import React, { useRef, useState } from "react";
import uuid from "react-uuid";

const AddForm = ({ handleMenu }) => {
    const categoryInput = useRef();
    const menuNameInput = useRef();
    const menuDescInput = useRef();
    const thumbnailInput = useRef();
    const priceInput = useRef();
    const hotInput = useRef();
    const recInput = useRef();
    const newInput = useRef();
    const soldInput = useRef();
    const hideInput = useRef();
    const [loading, setLoading] = useState(false);
    const [uploadMent, setUploadMent] = useState("");

    const [thumbnail, setThumbnail] = useState("");

    const handleThumbnail = (e) => {
        const image = e.target.files[0];
        setThumbnail((prev) => image);
    };

    const addMenu = () => {
        if (!categoryInput.current.value.trim().length) return alert("카테고리명을 입력해주세요");
        if (!menuNameInput.current.value.trim().length) return alert("메뉴명을 입력해주세요");
        if (!menuDescInput.current.value.trim().length) return alert("메뉴설명을 입력해주세요");
        //if (!thumbnail) return alert("메뉴이미지를 첨부해주세요");
        if (thumbnailInput.current.value) {
            const uploadTask = storage.ref(`/images/${thumbnail.name}`).put(thumbnail);
            setUploadMent("이미지를 서버에 저장중입니다...");
            setLoading(true);

            const menuData = {
                id: uuid(),
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
                            handleMenu({
                                ...menuData,
                                thumbnailUrl: url,
                            }).then(() => {
                                setLoading(false);
                                setUploadMent("");
                                alert("성공적으로 등록했습니다.");

                                categoryInput.current.value = "";
                                menuNameInput.current.value = "";
                                menuDescInput.current.value = "";
                                setThumbnail("");
                                newInput.current.checked = false;
                                hotInput.current.checked = false;
                                recInput.current.checked = false;
                                hideInput.current.checked = false;
                                soldInput.current.checked = false;
                                priceInput.current.value = "";
                            });
                        });
                }
            );
        } else {
            setLoading(true);
            const menuData = {
                id: uuid(),
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

            setUploadMent("서버에 메뉴정보를 저장중입니다.");
            handleMenu(menuData).then(() => {
                setLoading(false);
                setUploadMent("");
                alert("성공적으로 등록했습니다.");

                categoryInput.current.value = "";
                menuNameInput.current.value = "";
                menuDescInput.current.value = "";
                setThumbnail("");
                newInput.current.checked = false;
                hotInput.current.checked = false;
                recInput.current.checked = false;
                hideInput.current.checked = false;
                soldInput.current.checked = false;
                priceInput.current.value = "";
            });
        }
    };

    return (
        <div className="app-inner">
            {loading && <div className="loading">{uploadMent}</div>}
            <div className="write-form">
                <label className="form-item">
                    <div className="label">카테고리</div>
                    <input type="text" ref={categoryInput} placeholder="카테고리명을 입력해주세요" />
                </label>
                <label className="form-item">
                    <div className="label">메뉴명</div>
                    <input type="text" ref={menuNameInput} placeholder="메뉴명을 입력해주세요" />
                </label>
                <label className="form-item">
                    <div className="label">메뉴설명</div>
                    <input type="text" ref={menuDescInput} placeholder="메뉴설명을 입력해주세요" />
                </label>
                <div className="form-item">
                    <div className="label">썸네일 이미지</div>
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
                            <input type="checkbox" ref={newInput} />
                            <span className="name">신규</span>
                        </label>
                        <label className="check-box">
                            <input type="checkbox" ref={hotInput} />
                            <span className="name">인기</span>
                        </label>
                        <label className="check-box">
                            <input type="checkbox" ref={recInput} />
                            <span className="name">추천</span>
                        </label>
                        <label className="check-box">
                            <input type="checkbox" ref={soldInput} />
                            <span className="name">품절</span>
                        </label>
                        <label className="check-box">
                            <input type="checkbox" ref={hideInput} />
                            <span className="name">가리기</span>
                        </label>
                    </div>
                </div>
                <label className="form-item">
                    <div className="label">가격</div>
                    <input type="number" ref={priceInput} placeholder="가격을 입력해주세요" />
                </label>
                <button type="button" onClick={addMenu} className="cm-btn">
                    등록하기
                </button>
            </div>
        </div>
    );
};

export default AddForm;
