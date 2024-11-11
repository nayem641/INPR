import React, { useState, useRef } from "react";
import { FaPen, FaPenAlt } from "react-icons/fa";
import styled, { createGlobalStyle } from "styled-components";
import Navigationbar from "../Components/Navigationbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Montserrat:wght@400;700&display=swap');
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 93vh;
  background: linear-gradient(to top, #3f2b96, #a8c0e0, #3f2b96);
  // background:transparent;
  position: relative;
`;

const Header = styled.h2`
  margin: 10px 0 0 0;
  text-align: center;
  color: rgba(55, 30, 0, 0.6);
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  font-family: "Montserrat", sans-serif;
`;

const StoryContainer = styled.div`
  width: 95%;
  height: 100%;
  // border: 1px solid #ccc;
  border-radius: 05px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin:10px;
  // background: rgba(255, 255, 255, 0.2);
`;

const TextArea = styled.textarea`
  position: absolute;
  // bottom: 10px;
  // left: 10px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.9);
  resize: none;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const OverlayText = styled.div`
  position: absolute;
  padding: 5px 10px;
  border-radius: 5px;
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize}px;
  background: rgba(0, 0, 0, 0.5); /* Always semi-transparent */
  color: ${(props) => props.color || "#fff"};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  cursor: grab;
  transform: scale(${(props) => props.textScale});
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
`;

const IconBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #ccc;
`;

const IconButton = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #495057;
  font-size: 24px;
`;

const Input = styled.input`
  display: none;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 100%;
  cursor: grab;
  transform: rotate(${(props) => props.rotation}deg)
    scale(${(props) => props.imageScale});
`;

const ToolsContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const ToolLabel = styled.label`
  display: block;
  margin: 5px 0;
`;

const ShareButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const RotateButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Resizer = styled.div`
  width: 10px;
  height: 10px;
  background: #007bff;
  position: absolute;
  bottom: 5px;
  right: 5px;
  cursor: se-resize;
`;

const CreateStory = () => {
  const navigate=useNavigate()
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [textPosition, setTextPosition] = useState({ left: 10, top: 60 });
  const [isDragging, setIsDragging] = useState(false);
  const [textColor, setTextColor] = useState("#fff");
  const [fontSize, setFontSize] = useState(20);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [imageScale, setImageScale] = useState(1);
  const [textScale, setTextScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isToolsVisible, setIsToolsVisible] = useState(false);
  const [rotationDegree, setRotationDegree] = useState(0);
  const [textWidth, setTextWidth] = useState(200);
  const [textHeight, setTextHeight] = useState(100);
  const textAreaRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTextToggle = () => {
    setIsTextVisible(!isTextVisible);
  };

  const handleTextMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setTextPosition((prev) => ({
        left: prev.left + e.movementX,
        top: prev.top + e.movementY,
      }));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleImageZoomChange = (delta) => {
    setImageScale((prev) => Math.max(0.1, prev + delta));
  };

  const handleTextZoomChange = (delta) => {
    setTextScale((prev) => Math.max(0.1, prev + delta));
  };

  const handleRotate = () => {
    setRotation(rotationDegree);
  };

  const toggleToolsVisibility = () => {
    setIsToolsVisible(!isToolsVisible);
  };

  const handleShare = () => {
    alert("Story shared!");
  };

  const handleResize = (e) => {
    e.preventDefault();
    const handleMouseMoveResize = (event) => {
      const newWidth = Math.max(100, textWidth + event.movementX);
      const newHeight = Math.max(100, textHeight + event.movementY);
      setTextWidth(newWidth);
      setTextHeight(newHeight);
    };

    const handleMouseUpResize = () => {
      document.removeEventListener("mousemove", handleMouseMoveResize);
      document.removeEventListener("mouseup", handleMouseUpResize);
    };

    document.addEventListener("mousemove", handleMouseMoveResize);
    document.addEventListener("mouseup", handleMouseUpResize);
  };

  return (
    <>
      {/* <Navigationbar/> */}
      <div className="storyPageHeader" style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundAttachment:"#f0f2f9"}}>
        <div className="backicon" style={{flex:"1"}}>
          <IoMdArrowRoundBack  style={{fontSize:"25px",margin:"10px",cursor:"pointer"}} onClick={()=>{navigate('/')}}/>
        </div>
        <div className="header" style={{flex:"3"}}>
          <h2 style={{color:"rgba(10,10,10,.8)"}}>Create new story</h2>
        </div>
      </div>

      <GlobalStyle />
      <Container onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <StoryContainer>
          {image ? (
            <ImagePreview
              src={image}
              alt="Story Preview"
              rotation={rotation}
              imageScale={imageScale}
              onMouseDown={(e) => e.preventDefault()}
            />
          ) : (
            <p>type something or set a photo</p>
          )}
          {isTextVisible && (
            <TextArea
              ref={textAreaRef}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Write your story..."
              visible={isTextVisible}
              width={textWidth}
              height={textHeight}
            />
          )}
          {caption && (
            <OverlayText
              fontSize={fontSize}
              color={textColor}
              fontFamily={fontFamily}
              textScale={textScale}
              left={textPosition.left}
              top={textPosition.top}
            >
              {caption}
            </OverlayText>
          )}
          {isTextVisible && <Resizer onMouseDown={handleResize} />}
        </StoryContainer>
        <IconBar>
          <IconButton>
            📷
            <Input type="file" accept="image/*" onChange={handleImageChange} />
          </IconButton>
          <IconButton onClick={handleTextToggle}>✏️</IconButton>
          <IconButton onClick={toggleToolsVisibility}>⚙️</IconButton>
          <ShareButton onClick={handleShare}>Share</ShareButton>
        </IconBar>
        <ToolsContainer visible={isToolsVisible}>
          <ToolLabel>
            Text Color:
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
            />
          </ToolLabel>
          <ToolLabel>
            Text Background Color (RGBA):
            <input
              type="color"
              onChange={(e) => {
                const color = e.target.value;
                const alpha = 0.5; // Set your desired transparency
                setBgColor(
                  `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
                    color.slice(3, 5),
                    16
                  )}, ${parseInt(color.slice(5, 7), 16)}, ${alpha})`
                );
              }}
            />
          </ToolLabel>
          <ToolLabel>
            Font Size:
            <input
              type="range"
              min="10"
              max="100"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            />
          </ToolLabel>
          <ToolLabel>
            Font Family:
            <select
              value={fontFamily}
              onChange={(e) => setFontFamily(e.target.value)}
            >
              <option value="Arial">Arial</option>
              <option value="Courier New">Courier New</option>
              <option value="Georgia">Georgia</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Verdana">Verdana</option>
              <option value="'Roboto', sans-serif">Roboto</option>
              <option value="'Montserrat', sans-serif">Montserrat</option>
            </select>
          </ToolLabel>
          <ToolLabel>
            Rotate Image:
            <RotateButton onClick={handleRotate}>Apply Rotation</RotateButton>
            <input
              type="number"
              value={rotationDegree}
              onChange={(e) => setRotationDegree(Number(e.target.value))}
              placeholder="Degree"
              style={{ width: "60px" }}
            />
          </ToolLabel>
          <ToolLabel>
            Image Zoom:
            <button onClick={() => handleImageZoomChange(0.1)}>Zoom In</button>
            <button onClick={() => handleImageZoomChange(-0.1)}>
              Zoom Out
            </button>
          </ToolLabel>
          <ToolLabel>
            Text Zoom:
            <button onClick={() => handleTextZoomChange(0.1)}>Zoom In</button>
            <button onClick={() => handleTextZoomChange(-0.1)}>Zoom Out</button>
          </ToolLabel>
        </ToolsContainer>
      </Container>
    </>
  );
};

export default CreateStory;
